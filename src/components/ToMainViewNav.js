import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CATEGORY_NAMES, POST_FILTER_TYPES, CATEGORIES } from "../constants";
import { setPostFilter } from "../redux/actions";

const mapStateToProps = (state, ownProps) => {
  const { category } = ownProps;
  return { category };
};

const mapDispatchToProps = {
  setPostFilter
};

const Nav = ({ category, setPostFilter }) => {
  if (category === undefined) category = "";
  return (
    <nav>
      <span>></span>
      <Link
        to="/"
        onClick={() =>
          setPostFilter({
            type: POST_FILTER_TYPES.CATEGORY,
            context: CATEGORIES.ALL
          })
        }
      >
        The work is undone.
      </Link>
      <span>-</span>
      <Link
        to={`/category/${category}`}
        onClick={() =>
          setPostFilter({ type: POST_FILTER_TYPES.CATEGORY, context: category })
        }
      >
        {CATEGORY_NAMES[category.toUpperCase()]}
      </Link>
    </nav>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
