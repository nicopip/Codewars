//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.


function likes(names) {
    let l = names.length
    if(l === 0){
      return "no one likes this"
    } else if(l === 1){
      return `${names[0]} likes this`
    } else if (l === 2){
      return `${names[0]} and ${names[1]} like this`
    } else if (l===3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
      return `${names[0]}, ${names[1]} and ${l-2} others like this`
    }
  }