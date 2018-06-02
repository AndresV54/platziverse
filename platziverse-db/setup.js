'use strict'

const debug = require('debug')('platziverse:db:setup')
const db = require('./')// Esto es requerir el index

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'maindb',
    username: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASS || 'admin',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    setup: true, // Parametro auxiliar para saber si ya se retorno el setup
    logging: s => debug(s)
  }

  await db(config).catch(fatalError)

  console.log('success')
  process.exit(0)
}

function fatalError(err){
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
}

setup()
