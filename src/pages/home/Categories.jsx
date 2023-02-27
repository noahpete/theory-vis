import { Link } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import "./styles.css";

const Categories = ({ categories }) => {
  return (
    <div className="theory__categories-wrapper">
      <Stack
        className="theory__categories-container"
        direction="row"
        flexWrap="wrap"
        justifyContent="start"
        gap={0.8}
      >
        {categories.map((category) => (
          <Box
            className={`category${
              category.status === "comingsoon" ? " comingsoon" : ""
            }`}
          >
            <Link
              to={category.status === "comingsoon" ? "/" : `${category.link}`}
            >
              <h2>{category.title}</h2>
            </Link>
            <p>{category.desc}</p>
            <p>
              {category.status === "inprogress"
                ? "In progress!"
                : category.status === "comingsoon"
                ? "Coming soon!"
                : ""}
            </p>
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default Categories;
