
export const todoComplete = (index,list) => {
    const newList = list.map((item, i) => {
      if (i === index) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    return newList;
  };
  export const onClick = (title,text) => {
    const data = {
      title,
      text,
      complete: false,
    };
    return data
  };

 export const todoDel = (index,list) => {
    const newList = list.filter((item, i) => {
      return i !== index;
    });
    return newList;
  };

 export const handleTextarea = (e) => {
    return e.target.value
  };
export const handleTitle = (e) => {
    return e.target.value
  };