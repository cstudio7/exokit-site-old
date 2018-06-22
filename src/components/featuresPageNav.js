import React, { Component } from 'react';
import '../css/featuresPage.css';

import portalImage from '../images/portals.png'
import mushroomImage from '../images/mushrooms.png'
import minecraftAvatarImage from '../images/minecraftAvatar.png'
import girlAvatarImage from '../images/girlAvatar.png'
import shapeBuilderImage from '../images/shapeBuilder.png'
import zeoForestImage from '../images/zeoForest.png'

class NewPage extends Component {
  render() {
    return (
      <div className='featuresPageNav'>
        <div className='row'>
          <div className='links col-sm-4'/>
          <div className='col-sm-8'>
            <div className='appGrid row d-flex'>
              <div className='appCards row col-12 flex-grow-1'>
                <div className='appCard col-2'>
                  <img src={portalImage} alt="Portal Demo" className="img-fluid"/>
                </div>
                <div className='appCard col-2'>
                  <img src={mushroomImage} alt="VR Guy" className="img-fluid"/>
                </div>
                <div className='appCard col-2'>
                  <img src={minecraftAvatarImage} alt="VR Guy" className="img-fluid"/>
                </div>
                <div className='appCard col-2'>
                  <img src={portalImage} alt="Portal Demo" className="img-fluid"/>
                </div>
                <div className='appCard col-2'>
                  <img src={mushroomImage} alt="VR Guy" className="img-fluid"/>
                </div>
                <div className='appCard col-2'>
                  <img src={minecraftAvatarImage} alt="VR Guy" className="img-fluid"/>
                </div>
                <div className='appCard col-2'>
                  <img src={portalImage} alt="Portal Demo" className="img-fluid"/>
                </div>
                <div className='appCard col-2'>
                  <img src={mushroomImage} alt="VR Guy" className="img-fluid"/>
                </div>
                <div className='appCard col-2'>
                  <img src={minecraftAvatarImage} alt="VR Guy" className="img-fluid"/>
                </div>
                <div className='appCard col-2'>
                  <img src={portalImage} alt="Portal Demo" className="img-fluid"/>
                </div>
                <div className='appCard col-2'>
                  <img src={mushroomImage} alt="VR Guy" className="img-fluid"/>
                </div>
                <div className='appCard col-2'>
                  <img src={minecraftAvatarImage} alt="VR Guy" className="img-fluid"/>
                </div>
              </div>
              <div className="alert alert-success">
                <h4 className="alert-heading">Cards footer</h4>
                <p className="mb-0">Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewPage;
