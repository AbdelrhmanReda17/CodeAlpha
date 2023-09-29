import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import { useSelector} from "react-redux";
const Paginate = () => {
    const { currentPage ,numberOfPages   } = useSelector((state)=> state.blogsReducer);
    const location = useLocation();
    return (
        <Pagination
          count={numberOfPages}
          page={Number(currentPage) || 1}
          variant="outlined"
          shape="rounded"
          sx={{ ul: { justifyContent: "center", marginTop: "30px" } }}
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              component={Link}
              to={`${location.pathname}?page=${item.page}`}
            />
          )}
        />
      )
}

export default Paginate