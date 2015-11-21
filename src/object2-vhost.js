import _ from 'lodash-fp'
import * as $$ from './util.js'
import {Router} from 'express'

const router = Router()
export default router

router.get('/', function(req, res) {
  const objectGroups = [
    { text: 'Группа 1', id: 1 },
    { text: 'Группа 2', id: 2, parentId: 1 },
    { text: 'Группа 3', id: 3, parentId: 2 },
  ]
  
  const objects = [
    { id: 1, groupId: 1, text: 'объект 1' },
    { id: 2, groupId: 1, text: 'объект 2' },
    { id: 3, groupId: 2, text: 'объект 3' },
  ]
  
  res.json({objects, objectGroups})
})
