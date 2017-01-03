import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Project DJ</h1>
                <p>Lorem ipsum dolor sit amet, mea eius inimicus qualisque ex, sea cu putent labores. Te discere equidem sanctus vix, ex mel veniam pericula. Placerat facilisis.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;