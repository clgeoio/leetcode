function canFinish(numCourses: number, prerequisites: number[][]) {
  const WHITE = 0; //untouched
  const GREY = 1; //processing
  const BLACK = 2; //finished

  const graph = new Map<number, number[]>();
  const colour: number[] = [];

  // build an empty graph
  for (let i = 0; i < numCourses; i++) {
    graph.set(i, []);
    colour[i] = WHITE;
  }

  // add all the edges
  for (let i = 0; i < prerequisites.length; i++) {
    const [edge, value] = prerequisites[i];
    graph.set(edge, [...graph.get(edge), value]);
  }

  // traverse the graph
  // return
  for (let i = 0; i < numCourses; i++) {
    if (colour[i] === WHITE) {
      if (dfs(graph, i, colour) === true) {
        return false;
      }
    }
  }
  return true;

  // returns true if a cycle is found
  function dfs(graph: Map<number, number[]>, vertex: number, colour: number[]) {
    colour[vertex] = GREY;
    for (let nextVertex of graph.get(vertex)) {
      if (colour[nextVertex] === GREY) {
        return true;
      }

      if (
        colour[nextVertex] === WHITE &&
        dfs(graph, nextVertex, colour) === true
      ) {
        return true;
      }
    }

    colour[vertex] = BLACK;
    return false;
  }
}

export { canFinish };
