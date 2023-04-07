import React, {Component } from "react";
import { Link } from "react-router-dom";

class Blog6 extends Component{
    render(){
        return(
			<>
			<div id="blog6" className="blogPadding"></div>
            <div>
            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <ol className="breadcrumbOlFont">
                            <li><Link to="/" className="breadcrumbUnderline">Home</Link></li>
                            <li><Link to="/blog" className="breadcrumbUnderline">Blog</Link></li>
                            <li> 5 simple steps</li>
                        </ol>
                    </div>
                </div>
            </section>
				<section className="inner-page">
				<div className="container">
					<div className="blog-post">
						<h1>5 simple steps (with screenshots) to deploy your MERN app</h1>
						<p>
							MERN: Mongodb, Express, React and Nodejs. MERN stack is currently one of the hottest
							technologies available in the market. In this article I will very briefly discuss about
							deploying a MERN application.
						</p>

						<img src="assets/img/blog/blog-1.jpg" className="img img-fluid" />

						<p>
							To deploy our app we will user AWS EC2 with Ubuntu OS for hosting our app, Mongodb Cloud for
							hosting our database and nginx to reverse proxy traffic to our frontend and apis.
						</p>

						<h4>
							5 Steps in brief
						</h4>

						<ol>
							<li>Launch AWS EC2 instance with Ubuntu 20.04 server image</li>
							<li>Launch MongoDB cluster or install MongoDB community version</li>
							<li>Install Nginx, git, nvm on the EC2 instance</li>
							<li>Clone express app repository and start app server using PM2.</li>
							<li>Build React project and deploy.</li>
						</ol>

						<p>
							<strong>Step 1: Launch AWS EC2 instance with Ubuntu 20.04 server image.</strong>
						</p>

						<p>
							AWS is one of the biggest cloud service provider, its 1 year free trial is ideal for
							developers
							learning devops or for testing waters for your new Idea. Its fairly easy to launch an EC2
							instance. To launch an ec2 instance login to your AWS console, search for ec2 and lookout
							for
							the
							Launch Instance button.
						</p>

						<img src="assets/img/blog/blog-1-1.png" className="img img-fluid" />

						<p>Click on the button and select Ubuntu Server 20.04 LTS.</p>

						<img src="assets/img/blog/blog-1-2.png" className="img img-fluid" />

						<p>
							On the next page Select t2.micro (free tier eligible) or any other instance according to
							your
							use case. Keep clicking on Next (default settings are good enough for a general applications
							but
							you can change them according to you requirements) until you reach the “Configure security
							group” tab, click on the Add Rule, select http protocol, repeat for https protocol and them
							click on Review and Launch.
						</p>

						<img src="assets/img/blog/blog-1-3.png" className="img img-fluid" />

						<p>
							On the next page click on Launch. After clicking a popup will open, create a new key pair or
							use
							an existing key pair. Ensure that you have private key file for the key pair which you are
							using. After clicking on Launch Instance your EC2 server will be up and running.
						</p>

						<p>
							<strong>Step 2: Launch MongoDB cluster or install MongoDB community version.</strong>
						</p>

						<p>
							Launching MongoDB cluster on MongoDB atlas is very simple so I won’t go in detail, MongoDB
							atlas
							offers a free tier which is more than enough for small applications to begin with.
						</p>

						<p>
							To install MongoDB community server on Ubuntu VM we just created follow this tutorial by
							MongoDB.
						</p>

						<p>
							<a href='https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/'
								target='_blank' rel="noopener nofollow">
								https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
							</a>
						</p>

						<p>
							<strong>Step 3: Install Nginx, git, nvm on the EC2 instance.</strong>
						</p>

						<p>
							Let me first introduce Nginx and why do we need it. Nginx is a webserver that can be used to
							serve static files, or it can be used to reverse proxy traffic to other application servers.
							Nginx can also be used as a load balancer for multiple instances of application server.
						</p>

						<p>
							Why are we using Nginx ?
						</p>

						<ol>
							<li>We want to keep API and frontend files separate, to make deployment fast and simple, so
								traffic should be diverted accordingly.</li>
							<li>We don’t want to manage https config from our express application.</li>
							<li>We might want to instantiate more than 1 instance of our express application to improve
								performance.</li>
						</ol>

						<p>
							You can read more about Nginx on the below article by Nginx team.
						</p>

						<p>
							<a href='https://www.nginx.com/resources/glossary/nginx/' target='_blank'
								rel="noopener nofollow">
								https://www.nginx.com/resources/glossary/nginx/
							</a>
						</p>

						<p>
							And an in depth explanation of why we need Nginx in this masterpiece:
						</p>

						<p>
							<a href='https://medium.com/intrinsic-blog/why-should-i-use-a-reverse-proxy-if-node-js-is-production-ready-5a079408b2ca'
								target='_blank' rel="noopener nofollow">
								https://medium.com/intrinsic-blog/why-should-i-use-a-reverse-proxy-if-node-js-is-production-ready-5a079408b2ca
							</a>
						</p>

						<p>
							To install Nginx, git execute following command on the VM.
						</p>

						<code>
							sudo apt-get install nginx git
						</code>

						<p>
							To install nvm execute bellow commands:
						</p>

						<code>
							wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash<br/>
							<br/>
							export NVM_DIR="$([ -z "${"{XDG_CONFIG_HOME-}"}" ] && printf %s "${"{HOME}"}/.nvm" || printf %s "${"{XDG_CONFIG_HOME}"}/nvm")"<br/>
							<br/>
							[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"<br/>
							<br/>
							nvm install v14.17.3<br/>
						</code>

						<p>
							You might ask why we need nvm for ?
						</p>

						<p>
							Full form of nvm is node version manager. You can use nvm to install different version of
							nodejs along with npm. This is one of the easiest way to properly install nodejs on linux.
						</p>

						<p>
							OPTIONAL: I personally prefer vim over other text editors. Vim comes by default installed,
							but not with its latest version. To update vim use following command.
						</p>

						<code>
							sudo apt-get install vim
						</code>

						<p>
							<strong>Step 4: Clone express app repository and start app server using pm2.</strong>
						</p>

						<p>
							Use git to clone your express app on the VM. Install PM2 on the VM using below command.
						</p>

						<code>
							npm i -g pm2
						</code>

						<p>
							In a brief PM2 is a daemon process manager that will help you manage and keep your
							application online 24/7. Visit PM2 official website for more info.
						</p>

						<p>
							<a href='https://pm2.keymetrics.io/' target='_blank' rel="noopener nofollow">
								https://pm2.keymetrics.io/
							</a>
						</p>

						<p>
							<strong>Step 5: Build React project and deploy.</strong>
						</p>

						<p>
							Navigate to you react project and run below command in a terminal.
						</p>

						<code>
							npm run build
						</code>

						<p>
							If you are using env variables and want to change the variables according to different
							environments take a look at the env-cmd package.
						</p>

						<p>
							<a href='https://www.npmjs.com/package/env-cmd' target='_blank' rel="noopener nofollow">
								https://www.npmjs.com/package/env-cmd
							</a>
						</p>

						<p>
							While the build is in progress create a folder on the VM to keep build files in. After build
							is finished use scp command to move build files to the folder.
						</p>

						<code>
							scp -r -i /home/user/ssh_keys/test.pem build/* ubuntu@x.x.x.x:/home/ubuntu/test-app-frontend
						</code>

						<p>
							Replace x.x.x.x with ip of your instance.
						</p>

						<p>
							An efficient method to automate build and transfer of build files is by using bash script,
							below is an example of the script.
						</p>

						<code>
							#!/bin/sh
							<br/>
							<br/>
							npm run build
							<br/>
							<br/>
							ssh -i /home/user/ssh_keys/test.pem ubuntu@x.x.x.x 'rm /home/ubuntu/test-app-frontend/* -r; mkdir -p /home/ubuntu/test-app-frontend'
							<br/>
							<br/>
							scp -r -i /home/user/ssh_keys/test.pem build/* ubuntu@x.x.x.x:/home/ubuntu/test-app-frontend
							<br/>
							<br/>
							rm build -r
						</code>

						<p>
							This script build the react app files, then removes existing files on the VM and copy the
							build files on the VM. Finally the script cleans the build folder ( this step can be omitted
							if required).
						</p>

						<p>
							Configure Nginx to reverse proxy traffic to frontend files and api. We need to edit the
							Nginx config file located at /etc/nginx. Following is an example of config file.
						</p>
                        

						<pre >{`  
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;
# Load dynamic modules. See /usr/share/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
	worker_connections 1024;
}

http {
    {"log_format"} {"main"} '$remote_addr - $remote_user [$time_local] "$request"' '$status $body_bytes_sent "$http_referer"' '"$http_user_agent" "$http_x_forwarded_for"';<br/>
    access_log  /var/log/nginx/access.log  main;
    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;
    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;
    
    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http:"//nginx.org/en/docs/ngx_core_module.html#include"
    # for more information.
    
    include /etc/nginx/conf.d/"*."conf;
    
    server {
        if ($host = example.com) {
            return 301 https:"//$host$request_uri";
        } # managed by Certbot
        listen 80;
        listen [::]:80 ipv6only=on default_server;
        server_name example.com;
        return 301 https:"//example.com$request_uri";
    }
    
    server {
        listen 443 ssl;
        server_name example.com;
        ssl_prefer_server_ciphers on;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:ECDH+3DES:DH+3DES:RSA+AESGCM:RSA+AES:RSA+3DES:!aNULL:!MD5:!DSS;
    	
        location /api/ {
            proxy_pass http:"//localhost:3000";
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
		
        location / {
            alias /home/ubuntu/test-app-frontend/;
            index index.html;
            try_files $uri $uri/ index.html =404;
        }
		
        ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    }

}
						`}</pre>

						<p>
							In this config I have assumed that you have ssl certificate installed and managed by
							Certbot. Certbot can generate SSL certificate issues by lets encrypt and install them on its
							own for you.
						</p>

						<p>
							With this we end this tutorial. All the best deploying your MERN application.
						</p>

					</div>
				</div>
			</section>


            </div>
			</>
        )
    }
}

export default Blog6;