import React, {Component } from "react";
import { Link } from "react-router-dom";

class Blog5 extends Component{
    render(){
        return(
			<>
			<div id="blog5" className="blogPadding"></div>
            <div>
            <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <ol className="breadcrumbOlFont">
                            <li><Link to="/" className="breadcrumbUnderline">Home</Link></li>
                            <li><Link to="/blog" className="breadcrumbUnderline">Blog</Link></li>
                            <li>AWS Lambda</li>
                        </ol>
                    </div>
                </div>
            </section>
		<section className="inner-page">
				<div className="container">
					<div className="blog-post">
						<h1>Scheduling cron jobs with AWS Event bridge and AWS Lambda</h1>
						<p>
							Every once in a while developers need to implement cron jobs. There are various solutions to
							implement cron job. But the one we are going to discuss in this post is AWS Event Bridge.
						</p>

						<img src="assets/img/blog/blog-2.png" className="img img-fluid" />

						<p>
							AWS Event Bridge is a platform from where changes occurring in an AWS account can be reacted
							on, for example when you launch a EC2 instance, a event is created, or when an IAM user
							opens up a port of a VM, another event is created. AWS Event Bridge can send these changes
							as events to different targets, for example to AWS SNS or to AWS Lambda to react on the
							change.
						</p>

						<p>
							This is not it. EventBridge can also be used to send events originating from a user managed
							app to the different targets that EventBridge supports. EventBridge uses Rules to process
							events and decide their destination.
						</p>

						<p>
							EventBridge Rules can also be used to runs on predefined schedule. These rules can be used
							to execute a job using AWS Lambda on specific intervals or on a specific date and time.
							Using this feature of AWS EventBridge you can use it as a cron job scheduler. EventBridge is
							a highly efficient and economical solution for projects of all scale, and has very high
							accuracy, with a latency of just 0.5 seconds.
						</p>

						<p>
							AWS EventBridge has following advantages over traditional methods for scheduling cron jobs:
						</p>

						<ol>
							<li>Jobs can be run with AWS Lambda, which uses cloud computation. Thus performance of
								servers is not affected at all.</li>
							<li>No polling is required to check for scheduled jobs.</li>
							<li>Scheduling jobs is very easy. AWS provides direct APIs to schedule jobs.</li>
							<li>Jobs which require a lot of time can be executed easily without worrying about overlap.
							</li>
						</ol>

						<p>
							Overall EventBridge is a solid platform to schedule routine jobs or time bound jobs.
						</p>

					</div>
				</div>
			</section>

            </div>
			</>
        )
    }
}

export default Blog5;