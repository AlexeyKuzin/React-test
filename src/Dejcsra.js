function PriorityQueue () {
    this._nodes = []; //Массив графов
  
    this.enqueue = (priority, key) => {
      this._nodes.push({key: key, priority: priority });
      this.sort();
      
    };
    this.dequeue = () => {
      return this._nodes.shift().key;
    };
    this.sort = () => {
      this._nodes.sort(function (a, b) {
        return a.priority - b.priority;
      });
    };
    this.isEmpty = () => {
      return !this._nodes.length;
    };
  }
  
  export default class Graph { 
    constructor(obj = {}) {
        this.vertices = {};
        Object.entries(obj).forEach(([key, relatedNodes]) => {
            this.addVertex(key, relatedNodes)
        });
    }
  
    addVertex(name, edges) {
      this.vertices[name] = edges;
    }
  
    shortestPath(start, finish) {
      let nodes = new PriorityQueue(),
          distances = {},
          previous = {},
          path = [],
          smallest, vertex, neighbor, alt;
  
      for(vertex in this.vertices) {
        if(vertex === start) {
          distances[vertex] = 0;
          nodes.enqueue(0, vertex);
        }
        else {
          distances[vertex] = Infinity;
          nodes.enqueue(Infinity, vertex);
        }
        previous[vertex] = null;
      }
      
      while(!nodes.isEmpty()) {
        smallest = nodes.dequeue();
        if(smallest === finish) {
          path = [];
  
          while(previous[smallest]) {
            path.push(smallest);
            smallest = previous[smallest];
          }
  
          break;
        }
  
        if(!smallest || distances[smallest] === Infinity){
          continue;
        }
  
        for(neighbor in this.vertices[smallest]) {
          alt = distances[smallest] + this.vertices[smallest][neighbor];
          if(alt < distances[neighbor]) {
            distances[neighbor] = alt;
            previous[neighbor] = smallest;
            nodes.enqueue(alt, neighbor);
          }
        }
      }
      
      return path;
    }
  }