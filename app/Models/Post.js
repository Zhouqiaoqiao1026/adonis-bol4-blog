'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
    
    static castDates (field, value) {
        if (field === 'created_at') {
          return `${value.format('YYYY.MM.DD')}`
        }
        return super.formatDates(field, value)
      }
}

module.exports = Post
