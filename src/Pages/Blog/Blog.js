import React from 'react';
import useTitle from '../../TitleView/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div>
            <div className="hero bg-base-300 mb-10">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold text-purple-100">Difference between SQL and NoSQL</h1>
                        <p className="py-6">SQL is relational database management system (RDBMS) and NOSQL non-relational database system.SQL databases have fixed or static or predefined schema and NOSQL have dynamic schema.
                            SQL databases are not suited for hierarchical data storage and NOSQL databases are best suited for hierarchical data storage.
                            SQL databases are best suited for complex queries and NOSQL databases are not so good for complex queries
                            SQL are vertically scalable and NOSQL are horizontally scalable</p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-300 mb-10">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold text-purple-100">What is JWT, and how does it work?</h1>
                        <p className="py-6">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It work as a compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.</p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-300 mb-10">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold text-purple-100">What is the difference between javascript and NodeJS?</h1>
                        <p className="py-6">Javascript is a programming language that is used for writing scripts on the website and NodeJS is a Javascript runtime environment.Javascript can only be run in the browsers and We can run Javascript outside the browser with the help of NodeJS. javascript is basically used on the client-side and NodeJS is mostly used on the server-side.Javascript is capable enough to add HTML and play with the DOM and Nodejs does not have capability to add HTML tags.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox and V8 is the Javascript engine inside of node.js that parses and runs Javascript. Javascript is used in frontend development and Nodejs is used in server-side development.</p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-300 mb-10">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold text-purple-100">How does NodeJS handle multiple requests at the same time?</h1>
                        <p className="py-6">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallels using the NodeJS cluster module or worker_threads module.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;