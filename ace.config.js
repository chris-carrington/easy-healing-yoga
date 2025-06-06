// @ts-check 


/** @type {import('@acets-team/ace').AceConfig} */
export const config = {
  apiDir: './src/api',
  appDir: './src/app',
  cookieKey: 'ace_cookie',
  sessionDataTTL: 1000 * 60 * 60 * 24 * 3, // 3 days in ms
  envs: [
    { name: 'local', url: 'http://localhost:3000' },
    { name: 'prod', url: 'https://transactency-corp.andrew-5a5.workers.dev' },
  ],
  plugins: {
    solid: true,
    valibot: true,
    mongoose: true,
  }
}


/** 
 * @typedef {Object} SessionData
 * @property {boolean} isAdmin
 */
