'use strict';

// importing mongoose
var mongoose = require("mongoose");

// importing course-api documents/collections
var Course = require('../models').course;
var User = require('../models').user;
var Review = require('../models').review;

// seedData object
// TODO: fix seedData syntax
// IDEA: read data from json files...

const seedData = {
  courses: [
    {
      _id: "57029ed4795118be119cc43d",
      user: "57029ed4795118be119cc437",
      title: "Build a Basic Bookcase",
      description: "High-end furniture projects are great to dream about. But unless you have a well-equipped shop and some serious woodworking experience to draw on, it can be difficult to turn the dream into a reality.\n\nNot every piece of furniture needs to be a museum showpiece, though. Often a simple design does the job just as well and the experience gained in completing it goes a long way toward making the next project even better.\n\nOur pine bookcase, for example, features simple construction and it's designed to be built with basic woodworking tools. Yet, the finished project is a worthy and useful addition to any room of the house. While it's meant to rest on the floor, you can convert the bookcase to a wall-mounted storage unit by leaving off the baseboard. You can secure the cabinet to the wall by screwing through the cabinet cleats into the wall studs.\n\nWe made the case out of materials available at most building-supply dealers and lumberyards, including 1/2 x 3/4-in. parting strip, 1 x 2, 1 x 4 and 1 x 10 common pine and 1/4-in.-thick lauan plywood. Assembly is quick and easy with glue and nails, and when you're done with construction you have the option of a painted or clear finish.\n\nAs for basic tools, you'll need a portable circular saw, hammer, block plane, combination square, tape measure, metal rule, two clamps, nail set and putty knife. Other supplies include glue, nails, sandpaper, wood filler and varnish or paint and shellac.\n\nThe specifications that follow will produce a bookcase with overall dimensions of 10 3/4 in. deep x 34 in. wide x 48 in. tall. While the depth of the case is directly tied to the 1 x 10 stock, you can vary the height, width and shelf spacing to suit your needs. Keep in mind, though, that extending the width of the cabinet may require the addition of central shelf supports.",
      estimatedTime: "12 hours",
      materialsNeeded: "* 1/2 x 3/4 inch parting strip\n* 1 x 2 common pine\n* 1 x 4 common pine\n* 1 x 10 common pine\n* 1/4 inch thick lauan plywood\n* Finishing Nails\n* Sandpaper\n* Wood Glue\n* Wood Filler\n* Minwax Oil Based Polyurethane\n",
      reviews: [
        {
          _id: "57029ed4795118be119cc43a"
        },
        {
          _id: "57029ed4795118be119cc43b"
        }
      ],
      steps: [
        {
          _id: "57029ed4795118be119cc43f",
          stepNumber: 1,
          title: "Cutting the Parts",
          description: "For precise crosscuts, first make a simple, self-aligning T-guide for your circular saw. Cut a piece of 1/2-in. plywood to 2 1/2 x 24 in. and glue and screw it to a roughly 12-in.-long piece of 1 x 4 pine that will serve as the crossbar of the T. Center the plywood strip along the 1 x 4 and make sure the pieces are perfectly square to each other.\n\nButt the crossbar of the T-guide against the edge of a piece of scrap lumber, tack the guide in place and make a cut through the 1 x 4 with your saw base guided by the plywood strip. Then, trim the 1 x 4 on the opposite side in the same way. Now, the ends of the 1 x 4 can be aligned with layout lines on the stock for precise cut positioning.\n\nBegin construction by using a tape measure to mark the length of a side panel on 1 x 10 stock, and lay out the cut line with a square. The side panels on our bookcase are 48 in. long."
        },
        {
          _id: "57029ed4795118be119cc43e",
          stepNumber: 2,
          title: "Blah Blah Blah",
          description: "And some other stuff..."
        }
      ],
      __v: 0
    },
    {
      _id: "57029ed4795118be119cc440",
      user: "57029ed4795118be119cc437",
      title: "Learn How to Program",
      description: "In this course, you'll learn how to write code like a pro!",
      estimatedTime: "6 hours",
      materialsNeeded: "* Notebook computer running Mac OS X or Windows\n* Text editor",
      reviews: [
        {
          _id: "57029ed4795118be119cc43c"
        }
      ],
      steps: [
        {
          _id: "57029ed4795118be119cc442",
          stepNumber: 1,
          title: "Blah Blah Blah",
          description: "And some stuff..."
        },
        {
          _id: "57029ed4795118be119cc441",
          stepNumber: 2,
          title: "Blah Blah Blah",
          description: "And some other stuff..."
        }
      ],
      __v: 0
    }
  ],
  reviews:  [
    {
      _id: "57029ed4795118be119cc43a",
      user: "57029ed4795118be119cc439",
      rating: 5,
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      postedOn: "2016-02-01T21:54:00.000Z",
      __v: 0
    },
    {
      _id: "57029ed4795118be119cc43b",
      user: "57029ed4795118be119cc438",
      rating: 3,
      review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postedOn: "2016-02-04T21:22:00.000Z",
      __v: 0
    },
    {
      _id: "57029ed4795118be119cc43c",
      user: "57029ed4795118be119cc439",
      rating: 5,
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postedOn: "2016-02-04T21:22:00.000Z",
      __v: 0
    }
  ],
  users: [
    {
      _id: "57029ed4795118be119cc437",
      fullName: "Joe Smith",
      emailAddress: "joe@smith.com",
      password: "password!",
      __v: 0
    },
    {
      _id: "57029ed4795118be119cc438",
      "fullName": "Sam Jones",
      "emailAddress": "sam@jones.com",
      password: "password#",
      __v: 0
    },
    {
      _id: "57029ed4795118be119cc439",
      "fullName": "Sam Smith",
      "emailAddress": "sam@smith.com",
      password: "password%",
      __v: 0
    }
  ]
};

// seedData methods to test if data has already been inserted
const initCourses = function(){
  Course.find({}, function(err, result){
    if (err){
      console.error(err);
    } else {
      return result;
    }
  }).then(function(result){
    if (result.length == 0){
      // inserting data
      Course.insertMany(seedData.courses, function(err){
        if (err){
          console.error(err);
        } else {
          console.log('course data inserted');
        }
      });
    } else {
      console.log(`course data already imported..`);
    }
  });
};

const initReviews = function(){
    Review.find({}, function(err, result){
    if (err){
      console.error(err)
    } else {
      return result;
    }
  }).then(function(result){
    if (result.length == 0){
        // inserting data
          Review.insertMany(seedData.reviews, function(err){
            if (err){
              console.error(err);
            } else {
              console.log('review data inserted');
            }
          });
    } else {
      console.log(`review data already imported..`);
    }
  });
};

const initUsers = function(){
    User.find({}, function(err, result){
      if (err){
        console.error(err)
      } else {
        return result;
      }
    }).then(function(result){
      if (result.length == 0){

            // instead of inserting data
            // getting user id's
            let userIds = seedData.users.map(function(item, index){
              return item._id;
            });

            // creating users so passwords will be hashed...
            userIds.forEach(function(item,index){
              User.create(seedData.users[index], function(err, doc){
                if (err){
                  console.error(err);
                }  else {
                  console.log(`user created from user data and password hashed:\n${doc}\n`);
                }
              });
            });

      } else {
        console.log(`user data already imported..`);
      }
    });
};

module.exports.initCourses = initCourses;
module.exports.initReviews = initReviews;
module.exports.initUsers = initUsers;
