# Hacktivpress

Simple Blog Website

## Getting Started

Just clone This Repo 

### Installing

```
cd server
npm install
npm start
```

and then install depencies for client

```
cd client
npm install
npm start
```



## API List

| Route 	| HTTP 	| Description 	|
|-------	|------	|-------------	|
|    /users   	|   GET   	|    Get list of users         	|
|   /users/signin    	|  POST    	|    Login user         	|
|     /users/signup  	|  POST    	|  Register new user           	|
|    /blog   	|   GET   	|         Get list of Blogs    	|
|    /blog   	|   POST   	|     Post new Blog        	|
|   /blog/:id    	|   PUT   	|    Edit particular blog post  |
|/blog/:id| DELETE| Delete particular blog post



## Built With

* [Express](https://expressjs.com/) - The web framework for Javascript
* [Vue](https://vuejs.org/) - Frontend FrameworkFeeds
* [Mongodb](https://www.mongodb.com/) -  Database
* [Mongoose](http://mongoosejs.com/) - Mongodb ODM
* 

## Authors

* **Rizki Pratama** - [Github](https://github.com/tamastro)

See also the list of [contributors](https://github.com/tamastro/hacktivpress/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details