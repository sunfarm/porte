import React, { Component } from 'react';

const images = require.context('../../public/images', true);

export default class Box extends Component {

    replaceMarkdownLinks = item => {
        return item.replace(
            /\[(.*?)]\(((?:https?|www|\/).*?)\)/,
            "<a href='$2' target='_blank'>$1<a/>"
        );
    };

    render() {
        if (this.props.image) {
            const image = images(`./${this.props.image}`);
            return (
                <img className="rounded" src={image}></img>
            );
        }
        if (this.props.items) {
            return (
                <div className="box">
                    <h3 className="title is-3">{this.props.title}</h3>
                    <h6 className="subtitle is-6">{this.props.paragraph}</h6>
                    {this.props.items.map((item, i) => {
                        if (typeof item == 'object') {
                            if (item.where && item.what) {
                                return (
                                    <div key={i}>
                                        <h5 className="title is-5">{item.where}</h5>
                                        <h6 className="subtitle is-6">{item.what}</h6>
                                        <p></p>
                                    </div>
                                );
                            }
                            if (item.title && item.authors) {
                                return (
                                    <div key={i}>
                                        <h5 className="title is-5"><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h5>
                                        <h6 className="subtitle is-6">{item.authors}</h6>
                                        <p></p>
                                    </div>
                                );
                            }
                        }
                        return (
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: this.replaceMarkdownLinks(item)
                                }}
                                key={i}
                            />
                        );
                    })}
                </div>
            );
        }
        return '';
    }
}