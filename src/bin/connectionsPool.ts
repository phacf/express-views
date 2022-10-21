import { Connection } from 'mongoose'

export class ConnectionsManager {
    mongoConnectionsPool: Map<string, Connection>

    constructor() {
        this.mongoConnectionsPool = new Map();
    };

    mongoCreateConnection(name: string = '', connection: Connection): Map<string, Connection> {
        return this.mongoConnectionsPool.set(name, connection);
    };

    mongoRemoveConnection(name: string = ''): boolean {
        return this.mongoConnectionsPool.delete(name);
    };

    mongoChangeConnection(name: string = '', connection: Connection): Map<string, Connection> {
        return this.mongoConnectionsPool.set(name, connection);
    };

    mongoGetConnection(name: string = ''): Connection | undefined {
        return this.mongoConnectionsPool.get(name);
    }


}