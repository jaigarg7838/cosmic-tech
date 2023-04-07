import React, {Component } from "react";
import { Link } from "react-router-dom";

class Blog4 extends Component{
    render(){
        return(
			<>
			<div id="blog4" className="blogPadding"></div>
            <div>
            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <ol className="breadcrumbOlFont">
                            <li><Link to="/" className="breadcrumbUnderline">Home</Link></li>
                            <li><Link to="/blog" className="breadcrumbUnderline">Blog</Link></li>
                            <li> MERN app</li>
                        </ol>
                    </div>
                </div>
            </section>
	<section className="inner-page">
				<div className="container">
					<div className="blog-post">
						<h1>How to automate MERN app deployment with Bitbucket pipelines</h1>
						<p>
							MERN stack is one of the most famous tech stack that a lot of startups and even enterprises
							are using today to build modern applications. Deployment is a key part of any application
							and it should be planned properly.
						</p>

						<p>
							Automation makes life of a developer easier. Once automated deployment pipelines are setup,
							deploying code is one less thing to worried about.
						</p>

						<p>
							Bitbucket is a feature rich source control platform. Recently I used Bitbucket pipelines and
							in this article I want to share with you how you can automate your deployment with Bitbucket
							Pipelines.
						</p>

						<p>
							There are 2 apps that we need to deploy:
						</p>

						<ol>
							<li>React Application (frontend code)</li>
							<li>Express Application (backend code)</li>
						</ol>

						<img src="assets/img/blog/blog-3.png" className="img img-fluid" />

						<p>
							<strong>
								Deployment of React Application.
							</strong>
						</p>

						<p>
							To deploy a React app we first need to build the source code to create a compiled bundle
							which can be server either via our express App or via a webserver like Nginx or Apache, and
							then we need to move the build files to our VM.
						</p>

						<p>
							With Bitbucket pipelines you can automate this process. Pipelines are triggered when an
							event occurs, for example when you merge a branch into master branch or when you put a tag
							on a commit. For the sake of simplicity I have used tag for triggers.
						</p>

						<p>
							EventBridge Rules can also be used to runs on predefined schedule. These rules can be used
							to execute a job using AWS Lambda on specific intervals or on a specific date and time.
							Using this feature of AWS EventBridge you can use it as a cron job scheduler. EventBridge is
							a highly efficient and economical solution for projects of all scale, and has very high
							accuracy, with a latency of just 0.5 seconds.
						</p>

						<p>
							This is the pipeline that I use to deploy my React apps.
						</p>
						<pre>
image: node:10.15.3
# Workflow Configuration
pipelines:
  tags:
    stage/*:
      - step:
          name: "Build for stage"
          caches:
            - node
          script:
            - npm ci
            - npm run build-stage
          artifacts:
            - build/**
      - step:
          name: "Remove old files from staging env"
          script:
            - pipe: atlassian/ssh-run:0.3.0
              variables:
                SSH_USER: 'ubuntu'
                SERVER: 'x.x.x.x'
                SSH_KEY: $MY_SSH_KEY
                MODE: 'command'
                COMMAND: 'rm /home/ubuntu/stage/myapp/* -r; mkdir -p /home/ubuntu/stage/myapp'
      - step:
          name: "Deploy on stage"
          deployment: Staging
          clone:
            enabled: false
          script:
            - pipe: atlassian/scp-deploy:1.0.1
              variables:
                USER: 'ubuntu'
                SERVER: 'x.x.X.x'
                SSH_KEY: $MY_SSH_KEY
                REMOTE_PATH: '/home/ubuntu/stage/myapp/'
                LOCAL_PATH: 'build/*'
    prod/*:
      - step:
          name: "Build for production"
          caches:
            - node
          script:
            - npm ci
            - npm run build-prod
          artifacts:
              - build/**
      - step:
          name: "Remove old files from production env"
          script:
            - pipe: atlassian/ssh-run:0.3.0
              variables:
                SSH_USER: 'ubuntu'
                SERVER: 'x.x.x.x'
                SSH_KEY: $MY_SSH_KEY
                MODE: 'command'
                COMMAND: 'rm /home/ubuntu/stage/myapp/* -r; mkdir -p /home/ubuntu/jeemb'
      - step:
          name: "Deploy on production"
          deployment: Production
          clone:
            enabled: false
          script:
            - pipe: atlassian/scp-deploy:1.0.1
              variables:
                USER: 'ubuntu'
                SERVER: 'x.x.x.x'
                SSH_KEY: $MY_SSH_KEY
                REMOTE_PATH: '/home/ubuntu/myapp/'
                LOCAL_PATH: 'build/*'
</pre>

						<p>
							In the above pipeline I have 2 separate envs for staging and production. Both env have
							different build commands to change env variables according to env that we are building for.
							Tag for staging env starts with stage/ followed by date similarly for production tag starts
							with prod/ . The pipeline is made of 3 easy step.
						</p>

						<p>
							<strong>Step 1:</strong> Install npm packages using npm ci. npm ci is a faster way to
							install dependencies in a CI-CD environment, you can read more about it here. Then run the
							build command, and save the content of build folder as an artifacts which we will move to
							our VM in step 3.
						</p>

						<p>
							<strong>Step 2:</strong> ssh into the VM and remove old files, so that collision can be
							prevented and our VM remains clean. Replace x.x.x.x with the ip of your VM. And add the
							MY_SSH_KEY variable in Bitbucket on the Repository Settings > Pipelines > Repository
							Variables page. Remember to convert your SSH key into base 64 string before entering it into
							variable value.
						</p>

						<p>
							<strong>Step 3:</strong> Copy all build files to VM using scp. Replace x.x.x.x with IP of
							your VM. This will complete the deployment of the React app.
						</p>

						<br />
						<br />

						<p>
							<strong>
								Deployment of Express Application
							</strong>
						</p>

						<p>
							Deployment of Express app is easier compared to React app. Express app can be deployed in 2
							ways.
						</p>

						<ol>
							<li>Install npm modules using npm ci, then save entire build as an artifact. Then deploy app
								using scp and restart pm2 (or any other task manager).</li>
							<li>ssh into the VM, pull the master/staging branch, run npm ci and at last restart pm2.
							</li>
						</ol>

						<p>
							We will use the 2nd method to deploy our express app.
						</p>

						<p>
							bitbucket-pipelines.yml
						</p>

						<pre>
image: atlassian/default-image:2
pipelines:
  tags:
    stage/*:
      - step:
          name: "Deployment on staging env"
          deployment: staging
          script:
            - pipe: atlassian/ssh-run:0.3.0
              variables:
                SSH_USER: 'ubuntu'
                SERVER: 'x.x.x.x'
                SSH_KEY: $MY_SSH_KEY
                MODE: 'script'
                COMMAND: 'deploy_stage.sh'
    prod/*:
      - step:
          name: "Deployment on production env"
          deployment: production
          script:
            - pipe: atlassian/ssh-run:0.3.0
              variables:
                SSH_USER: 'ubuntu'
                SERVER: 'x.x.x.x'
                SSH_KEY: $MY_SSH_KEY
                MODE: 'script'
                COMMAND: 'deploy_prod.sh'
</pre>


						<p>
							deploy_prod.sh
						</p>

						<pre>
#!/bin/bash

source /home/ubuntu/.nvm/nvm.sh;
cd /home/ubuntu/my_express_app
git pull origin master
npm i --no-save
pm2 restart www
</pre>

						<p>
							In this pipeline we ssh into our VM and execute a shell script in the example it is
							deploy_prod.sh script. This scripts pulls the code from git and installs dependencies. After
							the code is pulled and dependencies are installed the express server is restarted using pm2.
						</p>

					</div>
				</div>
			</section>

            </div>
			</>
        )
    }
}

export default Blog4;