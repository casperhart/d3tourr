export const FRAGMENT_SHADER = `
varying float vSize;
varying vec3 vColor;
varying float vAlpha;

void main(){
    gl_FragColor = vec4( vColor, vAlpha);

    // make points circular
    float distance = length(2.0 * gl_PointCoord - 1.0);
    if (distance > 1.0) {
        discard;
    }
}
`

export const VERTEX_SHADER_3D = `
uniform float size;
uniform float alpha;

attribute vec3 color;

// passed to fragment shader
varying vec3 vColor;
varying float vAlpha;

void main(){
    vColor=color;
    vAlpha=alpha;

    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 200.0 * size / -mvPosition.z;
}
`

export const VERTEX_SHADER_2D = `
uniform float size;
uniform float zoom;
uniform float alpha;

attribute vec3 color;

// passed to fragment shader
varying vec3 vColor;
varying float vAlpha;

void main(){
    vColor=color;
    vAlpha = alpha;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 100.0 * size * sqrt(zoom);
}
`