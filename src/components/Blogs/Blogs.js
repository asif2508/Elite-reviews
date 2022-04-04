import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
           <div className='question-style'>
               <h1>What is context API?</h1>
               <p>
                   <strong>
                   Context api is a special feature of React which allows
                   us to share any information to any component directly without
                   props drilling. It's the efficient way to share arrays,
                    variable and functions. It also makes the data sharing safe.
                    It works like a mobile tower and share the information inside 
                    its area.
                   </strong>
               </p>
            </div>

            <div className='question-style'>
                <h1>What is semantic tag?</h1>
                <p>
                    <strong>
                        Semantic tags are the html tags which makes codes more clear and readable to both developer and the browser. It also works for SEO or Search Engine Optimization. We use semantic tags instead of using many divs in a webpage.
                        <code> header, section, article, footer</code> etc are semantic tags.
                    </strong>
                </p>
            </div>
            <div className='question-style'>
                <h1>Difference between block, inline and inline-block elements</h1>
                <p>
                    <strong>
                        <bold>Block element</bold>:  Block Elements occupy the full width irrespective of their sufficiency. Block elements always start in a line and have top bottom margin. <code>h1-h6, div, ul </code> are the block elements.
                    </strong>
                </p>

                <p>
                    <strong>
                        <bold>Inline element</bold>:  Inline elements occupy only sufficient width required. Inline elements don’t start in a new line.	<code>a, img, span </code> are the inline elements.
                    </strong>
                </p>

                <p>
                    <strong>
                        <bold>Inline-block element</bold>:  Inline-block helps the inline elements to behave like block elements. If we use <code>display: inline-block</code> of an inline element, then we can set height and the width that element.
                    </strong>
                </p>
            </div>
        </div>
    );
};

export default Blogs;