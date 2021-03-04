var pronoun = ["the","our","them"];
var adj = ["great", "big", "crazy"];
var noun = ["comedy", "ocean", "valerio", "internet", "plus"];
var dom = ["net", "com", "io", "us"];

for (let i=0; i < pronoun.length; i++){
    for(let j=0; j < adj.length; j++){
        for(let o=0; o < noun.length; o++){
            for(let t=0; t < dom.length; t++){
                let c= pronoun[i] + adj[j] + noun[o];
                let p= c.indexOf(dom[t]);
                let x;
                if (p !== -1 && c.length === p + dom[t].length){
                    x = c.slice(0, p) + "." + dom[t];
                }
                else {
                    x = c + "." + dom[t];
                }
                console.log(x);
            }
        }
    }
}


