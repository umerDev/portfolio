import React, { Component } from 'react';
import Header from '../props/header';
import '../../css/App.css';

export default class About extends Component
{
    render() {
        return (
            <div className = "body">
            <Header name = {this.constructor.name}/>
            <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                        <div className="about-desc">
                        <span className="heading-meta">About Me</span>
                        <h2 className="colorlib-heading">Who Am I?</h2>
                        <p>I am a software engineer with 3 years' professional experience. I enjoy exploring new frameworks and libraries.</p>
                        <p>I currently have an interest in Mobile Development.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="colorlib-about">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">What I do?</span>
                    <h2 className="colorlib-heading">Here are some of my expertise</h2>
                </div>
                </div>
                <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                    <span className="icon">
                        <i className="icon-bulb" />
                    </span>
                    <div className="desc">
                        <h3>Mobile Development </h3>
                        <p>I have experience building and deploying mobile apps</p>
                        <p>using Cross-platform Development techniques, in addition to native support using both Java and Objective-C</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-3">
                    <span className="icon">
                        <i className="icon-phone3" />
                    </span>
                    <div className="desc">
                        <h3>Data Structures & Algorithms</h3>
                        <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-5">
                    <span className="icon">
                        <i className="icon-data" />
                    </span>
                    <div className="desc">
                        <h3>Dev Ops</h3>
                        <p>I am currently investigating CI/CD pipelines.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            </div>
        )
      }
    }