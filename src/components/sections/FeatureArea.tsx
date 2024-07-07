import React from 'react'

const FeatureArea = () => {
  return (
    <div>
       <div className="features-area py-12">
        <div className="container mx-auto space-y-8">
          {['Air Freight Services', 'Logistic Services', 'Road Transport'].map((service, index) => (
            <div key={index} className="hover-content flex flex-col items-center text-center">
              <h2 className="text-6xl font-bold text-gray-300">{`0${index + 1}`}</h2>
              <div className="arrow-btn flex flex-col items-center space-y-2">
                <h3>
                  <a href="services.html" className="text-2xl font-bold">{service}</a>
                </h3>
                <a className="icon text-primary-color" href="services.html">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              <div className="info space-y-2">
                <h3 className="text-xl font-bold">
                  <a href="services.html">{service}</a>
                </h3>
                <p className="text-base">Transportation is a vital aspect of modern life, shaping the way people and goods move from one place to another.</p>
                <a className="icon text-primary-color" href="services.html">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeatureArea
