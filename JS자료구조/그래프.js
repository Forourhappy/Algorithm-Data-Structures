// Graph

// 구조
// Vertex(정점)와 그를 잇는 선분 Edge(간선)으로 이루어져 있는 구조
// 트리는 그래프의 한 형태(노드와 노드의 경로가 하나만 존재)


// 종류
// 1. 방향에 따라
// - 무방향 그래프
// 그래프에 방향이 없이 선분으로만 이어져 있음(페이스북의 친구)
// - 방향 그래프(단방향, 양방향)
// 그래프에 방향이 있어서 그 방향대로만 이동 가능(인스타그램의 팔로우)

// 2. 가중치에 따라
// - 비가중 그래프
// 간선에 아무런 가중치가 없는 보통의 그래프
// - 가중치 그래프
// 간선에 가중치가 존재. 가중치에 따라 우선순위가 다름
// (인스타그램에서 게시글에서 좋아요를 했을 때, 특정 사람의 게시물에 좋아요가 많다면 그 사람에게 높은 가중치)


// 구현
// 1. 인접 행렬
// # A B C D
// A 0 1 0 0
// B 1 0 1 0
// C 0 1 0 1
// D 0 0 1 0
// 이 경우 두 노드 사이에 간선이 있다면 1, 없다면 0으로 표현

// 2. 인접 리스트
//   [                  {
// 0   [1, 5]               A: ["B", "F"],
// 1   [0, 2]               B: ["A", "C"],
// 2   [1, 3]      or       C: ["B", "D"],
// 3   [2, 4]               D: ["C", "E"],
// 4   [3, 5]               E: ["D", "F"],
// 5   [4, 0]               F: ["E", "A"]
//   ]                  }
// 0에 연결이 되어 있는 노드는 1, 5.
// 1에 연결되어 있는 노드는 0, 2.
// 만약 숫자가 아닌 노드를 연결한다면 해시 테이블 사용.
// 이런 식으로 연결되어 있는 노드를 리스트로 표현


// Big O (|V|:정점의 수 , |E|: 간선의 수)
// 연산           리스트         행렬
// 정점 추가      O(1)           O(|V^2|)
// 간선 추가      O(1)           O(1)
// 정점 삭제      O(|V| + |E|)   O(|V^2|)
// 간선 삭제      O(|E|)         O(1)
// 특정 간선      O(|V| + |E|)   O(1)
// 저장공간       O(|V| + |E|)   O(|V^2|)

// 리스트
// - 간선이 많지 않고 퍼져있는 그래프에 용이
// - 모든 간선을 순회할 때 빠르게 가능
// 행렬
// - 특정 간선이 있는지 확인이 빠름

// 간단하게 기초만 작성
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v2);
    }


    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex) {
        // 제거할 정점에 연결된 간선들을 순회하며 삭제
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        // 빈 배열만 남은 키 삭제
        delete this.adjacencyList[vertex];
    }

//     재귀적 용법의 DFS
//     1. 시작할 정점를 정한 후, 결과 배열을 만든다
//     2. 방문한 정점을 기록할 객체를 만든다
//     3. 정점 방문을 수행할 헬퍼 함수를 만든다.
    depthFirstRecursive(start) {
        // 결과 배열
        const result = [];
        // 방문한 정점 배열
        const visited = {};
        // this 바인딩 문제로 변수 선언
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            // 정점이 없으면 null 반환
            if (!vertex) return null;
            // 정점을 방문 처리
            visited[vertex] = true;
            // 결과 배열에 정점 추가
            result.push(vertex);
            // 인접 리스트에 방문하지 않은 정점이 있다면 dfs 재귀 호출
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);
        return result;
    }

    // 반복적 용법의 DFS
    depthFirstIterative(start) {
        // 앞으로 방문해야 하는 정점들
        const stack = [start];
        // 방문한 순서대로 담는 배열
        const result = [];
        // 방문했는지 판단
        const visited = {};
        // 현재 정점
        let currentVertex;
        visited[start] = true;
        // 방문할 정점이 없을 때까지
        while (stack.length) {
            // 스택에서 pop하는 것에서부터 시작
            currentVertex = stack.pop();
            // 결과 배열에 넣은 후,
            result.push(currentVertex);
            // 인접한 정점들을 살펴보고 방문하지 않았다면 stack에 추가
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addEdge('A', 'C');
g.addEdge('A', 'B');
g.addEdge('C', 'D');
console.log(g.depthFirstRecursive('A'));
