import React from "react";
import MoreVert from "@mui/icons-material/MoreVert";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import { red } from "@mui/material/colors";
import {
  Dropdown,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  ListItemDecorator,
  ListDivider,
} from "@mui/joy";
import { useNotification } from "../../../../hooks";
import ProjectModal from "../../../ProjectModal/ProjectModal";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { updateBlog , deleteBlog } from "../../../../store/blogsActions";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const AuthorDropDown = ({blogData}) => {
  const query = useQuery();
  const page = query.get('page') || 1;

  const [notificationOpen, handleOpen, handleClose] = useNotification();
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("You must add a title")
      .min(3, "Title is too short - should be 3 chars minimum"),
    description: yup
      .string()
      .required("You must add an description")
      .min(3, "You must add an description of at least 3 characters"),
  });
  const initialValues = {
    title: blogData.title,
    description: blogData.description,
  };
  const onSubmit = (values) => {
    const data = new FormData();
    for (const [key, value] of Object.entries(values)) {
      data.append(key, value);
    }
    data.append("_id", blogData._id);
    dispatch(updateBlog(data));
  }
  const onDelete = () => {
    dispatch(deleteBlog(page,blogData));
  }
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "soft", color: "neutral" } }}
        sx={{
          position: "absolute",
          top: "0.875rem",
          right: { md: "0.5rem", xs: "auto" },
          left: { xs: "0.5rem", md: "auto" },
          zIndex: 1,
        }}
      >
        <MoreVert />
      </MenuButton>
      <Menu placement="bottom-end">
        <MenuItem onClick={handleOpen}>
          <ListItemDecorator>
            <Edit />
          </ListItemDecorator>
          Edit Blog
        </MenuItem>
        <ListDivider inset="inset" />
        <MenuItem onClick={onDelete}>
          <ListItemDecorator>
            <DeleteForever sx={{ color: red[700] }} />
          </ListItemDecorator>
          Delete Blog
        </MenuItem>
      </Menu>
      <ProjectModal
        isOpen={notificationOpen}
        handleClose={handleClose}
        schema={schema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      />
    </Dropdown>
  );
};

export default AuthorDropDown;
