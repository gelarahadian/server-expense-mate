import {Router} from 'express'
import transaction from './transactionRoute'
import summary from './summaryRoute'
import multer from 'multer'

const upload = multer()

const api = Router().use(transaction).use(summary)

export default Router().use('/api',upload.none(), api)