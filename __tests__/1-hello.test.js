describe("Example", () => {
  it("test", () => {
    const spy = jest.spyOn(console, "log"); //
    require("../exercises/1-hello.js");
    expect(spy).toHaveBeenCalled();
  });
});
