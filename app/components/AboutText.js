import React from 'react'

export default class AboutText extends React.Component {
    render() {
        return (
            <div className='footer'>
                <span className='small-text'>
                    This website application was developed by 
                    <a href={this.props.website} className="footer-link" target="_blank">
                        {this.props.name}
                    </a> while using the <span class="framework-name">
                        {this.props.framework
                        ? `while using the ` + this.props.framework 
                        : ``}
                    </span> framework.
                </span>
            </div>
        )
    }
}