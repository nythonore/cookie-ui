# Cookie UI

This repository contains code for Cookie UI in React and Bootstrap.\
view demo: https://cookie-ui.nythonore.me

![alt text](https://nythonore.me/work/cookie.png)

### Prerequisites

Make sure you have already installed Docker Engine. You don’t need to install Nginx or YARN, as both are provided by Docker images.

```
$ docker -v
Docker version 20.10.7, build f0df350
```

### Installing

```
$ git clone https://github.com/nythonore/cookie-ui.git
```

```
$ cd cookie-ui
```

```
$ docker-compose -f docker-compose.prod.yml build
```

```
$ docker run -p 3000:80 --name cookie-ui cookie-ui
```

Go to [http://localhost:3000](http://localhost:3000)

### Built With

- [React](https://www.typescriptlang.org/) - Front-end Framework
- [React Bootstrap](https://react-bootstrap.github.io/) - CSS Framework
- [Nginx](https://nginx.org/en/) - Web Server
- [Docker](https://www.docker.com/) - Containerization

### Author

**Honore Niyitegeka** (https://nythonore.me)

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
