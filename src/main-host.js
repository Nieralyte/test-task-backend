import _ from 'lodash-fp'
import * as $$ from './util.js'
import {Router} from 'express'

const router = Router()
export default router

router.get('/', function(req, res) {
  const collGroups = [
    { text: 'Группа коллекций 1', id: 1 },
    { text: 'Группа коллекций 2', id: 2 },
    { text: 'Группа коллекций 3', id: 3, parentId: 2 },
  ]
  
  const colls = [
    { text: 'Коллекция 1',
      server: '//object1.localhost/',
      id: 1,
      groupId: 1 },
    
    { text: 'Коллекция 2',
      server: '//object2.localhost/',
      id: 2,
      groupId: 2 },
  ]
  
  res.json({colls, collGroups})
})
