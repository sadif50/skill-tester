import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center mb-5 pb-2 mt-5 border-bottom'>
                Some Question & Answer
            </h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            1. What is the purpose of React Router?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Answer: </strong>Create React App doesn't include page routing. React Router is the most popular solution. ReactRouter is a standard library system built on React and used to create routing in React applications using the ReactRouter package.React Router is mainly used for single-page-application development and used to define multiple routes in React Router applications. When a user types a specific URL into the browser, and if this URL matches any 'route' inside the path router file, the user will be redirected to that particular route.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            2. How does context API works?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Answer: </strong>
                            React Context is a way to manage state globally. In a typical React application, data is passed top-down (parent to child) via props. To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling". Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            3. What is useRef? Write details about it.
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <strong>Answer: </strong>    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. It allows you to persist values between renders. It returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). It can be used to store a mutable value that does not cause a re-render when updated. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;