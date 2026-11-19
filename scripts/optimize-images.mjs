/**
 * Generates web-optimized media from the original assets.
 * Run with: npm run images
 */
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const src = path.join(root, 'assets', 'images')
const out = path.join(root, 'public', 'media')

await mkdir(out, { recursive: true })

const jobs = [
  {
    file: 'JD_Profile_pic.jpg',
    name: 'portrait.webp',
    run: (img) => img.resize(600, 600, { fit: 'cover' }).webp({ quality: 90 }),
  },
  {
    // Use the red 3M mark rather than the wide "Science. Applied to Life." lockup,
    // which becomes illegible inside a small logo tile.
    file: '3M_Logo.jpg',
    name: '3m-logo.webp',
    run: async (img) => {
      const trimmed = await img
        .flatten({ background: '#ffffff' })
        .trim({ background: '#ffffff', threshold: 12 })
        .toBuffer()
      const { width = 1500, height } = await sharp(trimmed).metadata()
      return sharp(trimmed)
        .extract({ left: 0, top: 0, width: Math.min(1500, width), height })
        .trim({ background: '#ffffff', threshold: 10 })
        .resize({ width: 420 })
        .webp({ quality: 92 })
    },
  },
  {
    // Square navy badge so the mark reads correctly inside small logo tiles.
    file: 'AWS_Logo.png',
    name: 'aws-logo.webp',
    run: async (img) => {
      const trimmed = await img.trim({ background: '#04273a', threshold: 18 }).toBuffer()
      const mark = await sharp(trimmed).resize({ width: 264 }).toBuffer()
      return sharp({
        create: { width: 320, height: 320, channels: 3, background: '#04273a' },
      })
        .composite([{ input: mark, gravity: 'center' }])
        .webp({ quality: 92 })
    },
  },
  {
    file: 'ucla-logo-vector-25.jpg',
    name: 'ucla-mark.webp',
    run: (img) =>
      img
        .extract({ left: 170, top: 0, width: 1024, height: 1024 })
        .resize(420, 420)
        .webp({ quality: 92 }),
  },
  {
    file: 'aiseshq_logo.jpg',
    name: 'aises-logo.webp',
    run: (img) => img.resize(360, 360).webp({ quality: 92 }),
  },
  {
    file: 'aws-builders-la.avif',
    name: 'aws-builders-la.webp',
    run: async (img) => {
      const trimmed = await img.trim({ background: '#ffffff', threshold: 12 }).toBuffer()
      return sharp(trimmed).resize(400, 400, { fit: 'cover' }).webp({ quality: 92 })
    },
  },
  {
    file: 'AWS_EVENT1.jpg',
    name: 'aws-event-1.webp',
    run: (img) => img.resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 80 }),
  },
  {
    file: 'AWS_EVENT2.jpg',
    name: 'aws-event-2.webp',
    run: (img) => img.resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 80 }),
  },
  {
    file: 'AISES_Pic.jpg',
    name: 'aises-event.webp',
    run: (img) => img.resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 82 }),
  },
]

for (const job of jobs) {
  const input = path.join(src, job.file)
  const pipeline = await job.run(sharp(input).rotate())
  const info = await pipeline.toFile(path.join(out, job.name))
  console.log(`${job.name.padEnd(20)} ${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)} kB`)
}

console.log('\nDone → public/media')
