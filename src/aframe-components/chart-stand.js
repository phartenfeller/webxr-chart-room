/* global THREE */

export default function init(instance) {
  instance.registerComponent('chartstand', {
    schema: {
      width: { type: 'number', default: 1 },
      height: { type: 'number', default: 1 },
      depth: { type: 'number', default: 1 },
      color: { type: 'color', default: '#AAA' },
    },

    /**
     * Initial creation and setting of the mesh.
     */
    init() {
      const { data } = this;
      const { el } = this;

      // Create geometry.
      this.geometry = new THREE.BoxBufferGeometry(
        data.width,
        data.height,
        data.depth
      );

      // Create material.
      this.material = new THREE.MeshStandardMaterial({ color: data.color });

      // Create mesh.
      this.mesh = new THREE.Mesh(this.geometry, this.material);

      // Set mesh on entity.
      el.setObject3D('mesh', this.mesh);
    },
  });
}
