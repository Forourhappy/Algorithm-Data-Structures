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

    adVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
    
}