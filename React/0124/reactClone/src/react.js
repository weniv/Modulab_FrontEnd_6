function createElement(tag, props, ...children) {

    if (typeof tag === 'function') {
        return tag(props, ...children);
    }

    return { tag, props, children };
}

function renderDom(vDom) {
    const el = document.createElement(vDom.tag);

    // 자식요소가 문자열일 경우
    if (typeof vDom === 'string') {
        return document.createTextNode(vDom);
    }

    if (vDom.props) {
        Object.entries(vDom.props).forEach(([key, value]) => {
            if (key === 'className') {
                el.setAttribute('class', value);
            }
        });
    }

    // 자식 요소가 HTML요소일 경우
    vDom.children.map((element) => {
        return renderDom(element)
    }).forEach(realEl => {
        el.append(realEl);
    });

    return el;
}



function render(element, container) {
    container.append(renderDom(element));
}

export { createElement, render }