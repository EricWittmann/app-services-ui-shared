import React, { useContext } from "react";

/**
 * The Config object provides shared configuration for the services
 */
export type Config = {
    /**
     * serviceDown is true if the entire service is down, this could be used to implement custom logic if the service is down
     */
    serviceDown: boolean
    /**
     * guides provides configuration for the guides module
     */
    guides: {
        /**
         * If showDrafts is true, then draft guides should be shown in this environment
         */
        showDrafts: boolean
    }
    /**
     * ams provides configuration for our integration with the Account Management Service
     */
    ams: {
        /**
         * apiBasePath is the base path for accessing AMS
         */
        apiBasePath: string,
    }
    /**
     * kas provides configuration for our integration with the KAS Fleet Manager
     */
    kas: {
        /**
         * apiBasePath is the base path for accessing KAS Fleet Manager
         */
        apiBasePath: string,
    }
    rbac: {
        basePath: string
    }
    /**
     * masSSO provides configuration for our integration with MASSSO
     */
    masSso: {
        /**
         * authServerUrl is the URL of the SSO server
         */
        authServerUrl: string,
        /**
         * clientId is the OpenID Connect client ID the UI uses to talk to MASSSO
         */
        clientId: string,
        /**
         * realm is the realm the service uses on MASSSO
         */
        realm: string
    }
    /**
     * kafka provides configuration for our integration with the Kafka instance
     */
    kafka: undefined,
    /**
     * apicurio_registry provides configuration with the Service Registry instance
     */
    apicurio_registry: {
        /**
         * apiBasePath is the base path for accessing service registry data plane
         */
        apiBasePath: string,
    },
    /**
    * srs provides configuration with the Service Registry control plane
    */
    srs: {
        /**
         * apiBasePath is the base path for accessing SRS Fleet Manager
         */
        apiBasePath: string,
    },
    cos: {
        /**
         * apiBasePath is the base path for accessing COS apis
         */
        apiBasePath: string,
        configurators: Record<string, unknown>
    },
    /**
     * federatedModules defines how we load all the federated modules in the UI
     */
    federatedModules: {
        /**
         * kafka defines how we load kafka-ui
         */
        kafka: FederatedModuleConfig
        /**
         * kas defines how we load kas-ui
         */
        kas: FederatedModuleConfig
        /**
         * guides defines how we load the guides
         */
        guides: FederatedModuleConfig
        /**
         * apicurio_registry defines how we load the federated module(s)
         */
        apicurio_registry: FederatedModuleConfig
        /**
         * srs defines how we load the federated module(s)
         */
        srs: FederatedModuleConfig
        /**
         * cos defines how we load cos-ui
         */
        cos: FederatedModuleConfig
    }
};


export type FederatedModuleConfig = {
    /**
     * basePath defines the path or URL that the fed-mods.json file should be loaded from
     */
    basePath: string
    /**
     * the fallbackBasePath is used to load fed-mods.json if there is an error loading fed-mods.json from the basePath
     */
    fallbackBasePath: string
}

/**
 * The ConfigContext allows access to the Config context
 */
export const ConfigContext: React.Context<Config | undefined> = React.createContext<Config | undefined>(undefined);

/**
 * useConfig is a custom hook that is a shorthand for useContext(ConfigContext)
 */
export const useConfig = (): Config => {
    const answer = useContext(ConfigContext);
    if (answer === undefined) {
        throw new Error("must be used inside an ConfigContext provider");
    }
    return answer;
}
