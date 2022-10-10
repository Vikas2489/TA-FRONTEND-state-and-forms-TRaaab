import React from 'react';
import data from '../data';
console.log(data);

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 'all',
      data: data,
    };
  }
  selectCategory = (e) => {
    this.setState((prevState) => {
      return {
        activeCategory: e.target.innerText,
        data:
          e.target.innerText === 'all'
            ? data
            : data.filter((obj) => obj.category === e.target.innerText),
      };
    });
  };
  render() {
    return (
      <>
        <ul className="flex space-x-2 justify-center ">
          {['all', 'breakfast', 'lunch', 'shakes'].map((category) => {
            return (
              <li onClick={this.selectCategory} className="py-5" key={category}>
                {category}
              </li>
            );
          })}
        </ul>
        <div className="flex justify-between flex-wrap">
          {this.state.data.map((food, i) => {
            return (
              <div key={food.id} className="flex basis-48">
                <figure className="basis-48">
                  <img src={food.img} alt={i} />
                </figure>
                <div className="basis-48">
                  <h2>
                    {food.title}
                    <span>{food.price}</span>
                  </h2>
                  <p>{food.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Category;
