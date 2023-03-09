import {PriorityQueue} from '../트리/우선 순위 큐.js';

// 다익스트라 최단 거리 알고리즘

// 다익스트라: 인물 이름
// 일반 사람들에게 어려운 일을 컴퓨터는 무척 쉽게 해낼 수 있음을 보여주기 위해 만들었다

// 어디에 사용? (최단 거리 찾기)
// GPS
// 네트워크 라우팅
// 전염병이 퍼질 때의 루트 - 속도
// 항공 티켓 - 가격 고려

// 가중치 그래프
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    dijkstra(start, finish) {
        // 우선 순위 큐(트리 - 우선 순위 큐)
        const nodes = new PriorityQueue();
        // 지금까지의 거리를 저장
        const distances = {};
        // 이전에 어느 노드를 들렸는지 저장
        const previous = {};
        // 최단 거리 경로
        const path = [];
        // 최단 거리 노드
        let smallest;

        // 초기 값 세팅
        // 인접 리스트를 돌면서 nodes, distances, previous를 세팅
        for (let vertex in this.adjacencyList) {
            // 시작 노드라면,
            if (vertex === start) {
                // 지금까지 거리에는 0을 저장
                distances[vertex] = 0;
                // 우선 순위 큐에 추가
                nodes.enqueue(vertex, 0);
                // 시작 노드가 아니라면,
            } else {
                // 지금까지 거리는 무한대
                // (아직 방문하지 않았으므로 지금까지의 거리를 알 수 없음) => 가장 큰 값으로 세팅
                distances[vertex] = Infinity;
                // 우선 순위 큐에 추가
                nodes.enqueue(vertex, Infinity);
            }
            // 방문 노드는 모두 null로 세팅
            previous[vertex] = null;
        }

        // 우선 순위 큐를 돌면서 실질적으로 계산
        while (nodes.values.length) {
            // 시작 노드부터 순차적으로 dequeue
            smallest = nodes.dequeue().val;
            // dequeue한 값이 도착 노드와 같다면,
            if (smallest === finish) {
                // 이전에 방문한 노드들을 살펴보면서 path에 push
                // 이때, 시작 노드는 previous가 null이므로 시작 노드는 추가되지 않음
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            // smallest가 null이 아니거나,
            // 시작부터 smallest까지의 거리가 현재 Infinity가 아니라면,
            if (smallest || distances[smallest] !== Infinity) {
                // smallest와 인접한 노드들을 모두 확인
                for (let neighbor in this.adjacencyList[smallest]) {
                    // smallest와 연결된 노드 객체
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // smallest까지의 거리에 nextNode의 거리를 더한 최단 거리 후보
                    // 다음 노드까지의 거리
                    let candidate = distances[smallest] + nextNode.weight;
                    // smallest와 연결된 노드
                    const nextNeighbor = nextNode.node;
                    // 다음 노드까지의 거리가 이미 저장된 거리보다 작다면,
                    if (candidate < distances[nextNeighbor]) {
                        // 최단 거리를 갱신해주고
                        distances[nextNeighbor] = candidate;
                        // 다음 노드의 이전 노드를 smallest로 갱신
                        previous[nextNeighbor] = smallest;
                        // 새로운 최단 거리를 추가해서 nextNeighbor를 우선 순위 큐에 enqueue
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    };

}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.dijkstra('A', 'E'));
