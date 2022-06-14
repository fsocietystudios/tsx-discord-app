function Category(props: any) {
  const categoryName = props.name;
  const children = props.children;

  return (
    <div className="mb-2">
      <a href="/" className="text-[#8e9297] font-bold text-sm w-full h-10">
        {categoryName}
      </a>
      <div className="mt-3 w-64">{children}</div>
    </div>
  );
}

export default Category;
