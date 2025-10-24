import React from 'react';

const Slider = () => {
    return (
        <div className='w-7/12 mx-auto py-5 shadow-2xl'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://i.postimg.cc/52B9Zqt9/plane.jpg"
                        className="w-full h-110 object-cover" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://i.postimg.cc/ydYNhgsD/blocks.jpg"
                        className="w-full h-110 object-cover" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://i.postimg.cc/6TswPyJS/doll.jpg"
                        className="w-full h-110 object-cover" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://i.postimg.cc/Kc310TtM/store.jpg"
                        className="w-full h-110 object-cover" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 pt-2">
                <a href="#item1" className="btn bg-gray-200 btn-xs">1</a>
                <a href="#item2" className="btn bg-gray-200 btn-xs">2</a>
                <a href="#item3" className="btn bg-gray-200 btn-xs">3</a>
                <a href="#item4" className="btn bg-gray-200 btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;