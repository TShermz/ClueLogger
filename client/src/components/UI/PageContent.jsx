import classes from "./PageContent.module.css";

function PageContent({ title, children }) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      <div className="content-container">{children}</div>
    </div>
  );
}

export default PageContent;
