import events from 'events';

export default class Job extends events.EventEmitter {
  constructor(queue, index, type, payload, options = {}) {
    super();

    this.queue = queue;
    this.index = index;
    this.jobType = type;
    this.payload = payload;
    this.options = options;
  }

  getProp(name) {
    return this[name];
  }
}