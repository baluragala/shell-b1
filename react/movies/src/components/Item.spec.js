import React from "react";
import Item from "./Item";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Link } from "react-router-dom";
import toJson from "enzyme-to-json";

Enzyme.configure({
  adapter: new Adapter()
});

describe("Item", () => {
  it("should render Link", () => {
    const movie = { imdbID: 1, Title: "mov1", Year: 2000, Poster: "post1" };
    const wrapper = shallow(<Item movie={movie} />);
    const h3 = wrapper.find("h3");
    const link = wrapper.find(Link);
    expect(h3.text()).toEqual(movie.Title);
    expect(link.prop("to")).toEqual("/movies/1");
  });

  it("should have same snapshot", () => {
    const movie = { imdbID: 1, Title: "mov1", Year: 2000, Poster: "post1" };
    const wrapper = shallow(<Item movie={movie} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
