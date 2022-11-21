const smoothScroll = (targetId: string) => {
  const target = document.getElementById(targetId);

  target?.scrollIntoView({ behavior: "smooth" });
};

export default smoothScroll;
