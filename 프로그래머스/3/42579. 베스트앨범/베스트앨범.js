function solution(genres, plays) {
    const hash = {}
    genres.forEach((genre, index) => {
        const play = plays[index];
        
        if (!hash[genre]) {
            hash[genre] = {};
            hash[genre].list = [];
            hash[genre].sum = 0;
        }
        hash[genre].list.push({
            i: index,
            p: play
        })
        hash[genre].sum += play;
    })
    
    const result = Object.values(hash).sort((a, b) => b.sum - a.sum)
    result.forEach((li) => {
        li.list.sort((a, b) => b.p - a.p);
    })
    
    return result.flatMap(v => {
        if (v.list.length > 1) {
            return [v.list[0].i, v.list[1].i]
        }
        return v.list[0].i
    })
}