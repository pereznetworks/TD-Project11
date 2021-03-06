
/* define schemas */

'use strict';
// importing mongoose.Schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// using bcrypt to to encrypt the passwords
// var bcrypt = require('bcrypt');

// using Validator.js to validate email address
// may use for others as well
var isEmail = require('validator').isEmail;

/* Course schema requirements
    _id (ObjectId, auto-generated)
    user (_id from the users collection)
    title (String, required)
    description (String, required)
    estimatedTime (String)
    materialsNeeded (String)
    steps (Array of objects that include:[ stepNumber (Number), title (String, required) and description (String, required) properties)]
    reviews (Array of ObjectId values: [_id values from the reviews collection])
*/

module.exports = new Schema({

  id: Schema.Types.ObjectId,
  user: {
                    type:  mongoose.Schema.Types.ObjectId,
                     ref: 'users',
                required: [true, `Oops, no user is associated wth this Course`]
         },
  title: {
                    type: String,
                required: [true, `Please type a title for the course.`]
         },
  description: {
                    type: String,
                required: [true, `Please type a description for the course.`]
               },
  estimatedTime: {
                    type: String
                  },
  materialsNeeded: {
                    type: String
                  },
  steps: [
            {
              stepNumber: Number,
              title: String,
              description: String
            }
          ],
  reviews: [
              {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'review'
              }
           ]
});
