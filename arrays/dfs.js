function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);
  for (const neighbor of graph(start)) {
    if (!visited.has[neighbor]) {
      dfs(graph, neighbor, visited);
    }
  }
}