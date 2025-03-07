import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class EKS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: EKS.Types.ClientConfiguration)
  config: Config & EKS.Types.ClientConfiguration;
  /**
   * Associate encryption configuration to an existing cluster. You can use this API to enable encryption on existing clusters which do not have encryption already enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new EKS clusters.
   */
  associateEncryptionConfig(params: EKS.Types.AssociateEncryptionConfigRequest, callback?: (err: AWSError, data: EKS.Types.AssociateEncryptionConfigResponse) => void): Request<EKS.Types.AssociateEncryptionConfigResponse, AWSError>;
  /**
   * Associate encryption configuration to an existing cluster. You can use this API to enable encryption on existing clusters which do not have encryption already enabled. This allows you to implement a defense-in-depth security strategy without migrating applications to new EKS clusters.
   */
  associateEncryptionConfig(callback?: (err: AWSError, data: EKS.Types.AssociateEncryptionConfigResponse) => void): Request<EKS.Types.AssociateEncryptionConfigResponse, AWSError>;
  /**
   * Associate an identity provider configuration to a cluster. If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes roles and clusterroles to assign permissions to the roles, and then bind the roles to the identities using Kubernetes rolebindings and clusterrolebindings. For more information see Using RBAC Authorization in the Kubernetes documentation.
   */
  associateIdentityProviderConfig(params: EKS.Types.AssociateIdentityProviderConfigRequest, callback?: (err: AWSError, data: EKS.Types.AssociateIdentityProviderConfigResponse) => void): Request<EKS.Types.AssociateIdentityProviderConfigResponse, AWSError>;
  /**
   * Associate an identity provider configuration to a cluster. If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes roles and clusterroles to assign permissions to the roles, and then bind the roles to the identities using Kubernetes rolebindings and clusterrolebindings. For more information see Using RBAC Authorization in the Kubernetes documentation.
   */
  associateIdentityProviderConfig(callback?: (err: AWSError, data: EKS.Types.AssociateIdentityProviderConfigResponse) => void): Request<EKS.Types.AssociateIdentityProviderConfigResponse, AWSError>;
  /**
   * Creates an Amazon EKS add-on. Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. Amazon EKS add-ons can only be used with Amazon EKS clusters running version 1.18 with platform version eks.3 or later because add-ons rely on the Server-side Apply Kubernetes feature, which is only available in Kubernetes 1.18 and later.
   */
  createAddon(params: EKS.Types.CreateAddonRequest, callback?: (err: AWSError, data: EKS.Types.CreateAddonResponse) => void): Request<EKS.Types.CreateAddonResponse, AWSError>;
  /**
   * Creates an Amazon EKS add-on. Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. Amazon EKS add-ons can only be used with Amazon EKS clusters running version 1.18 with platform version eks.3 or later because add-ons rely on the Server-side Apply Kubernetes feature, which is only available in Kubernetes 1.18 and later.
   */
  createAddon(callback?: (err: AWSError, data: EKS.Types.CreateAddonResponse) => void): Request<EKS.Types.CreateAddonResponse, AWSError>;
  /**
   * Creates an Amazon EKS control plane.  The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as etcd and the API server. The control plane runs in an account managed by AWS, and the Kubernetes API is exposed via the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single-tenant and unique and runs on its own set of Amazon EC2 instances. The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support kubectl exec, logs, and proxy data flows). Amazon EKS nodes run in your AWS account and connect to your cluster's control plane via the Kubernetes API server endpoint and a certificate file that is created for your cluster. Cluster creation typically takes several minutes. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see Managing Cluster Authentication and Launching Amazon EKS nodes in the Amazon EKS User Guide.
   */
  createCluster(params: EKS.Types.CreateClusterRequest, callback?: (err: AWSError, data: EKS.Types.CreateClusterResponse) => void): Request<EKS.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates an Amazon EKS control plane.  The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as etcd and the API server. The control plane runs in an account managed by AWS, and the Kubernetes API is exposed via the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single-tenant and unique and runs on its own set of Amazon EC2 instances. The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support kubectl exec, logs, and proxy data flows). Amazon EKS nodes run in your AWS account and connect to your cluster's control plane via the Kubernetes API server endpoint and a certificate file that is created for your cluster. Cluster creation typically takes several minutes. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see Managing Cluster Authentication and Launching Amazon EKS nodes in the Amazon EKS User Guide.
   */
  createCluster(callback?: (err: AWSError, data: EKS.Types.CreateClusterResponse) => void): Request<EKS.Types.CreateClusterResponse, AWSError>;
  /**
   * Creates an AWS Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate. The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile’s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate. When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes Role Based Access Control (RBAC) for authorization so that the kubelet that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see Pod Execution Role in the Amazon EKS User Guide. Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating. If any Fargate profiles in a cluster are in the DELETING status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster. For more information, see AWS Fargate Profile in the Amazon EKS User Guide.
   */
  createFargateProfile(params: EKS.Types.CreateFargateProfileRequest, callback?: (err: AWSError, data: EKS.Types.CreateFargateProfileResponse) => void): Request<EKS.Types.CreateFargateProfileResponse, AWSError>;
  /**
   * Creates an AWS Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate. The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile’s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate. When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes Role Based Access Control (RBAC) for authorization so that the kubelet that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see Pod Execution Role in the Amazon EKS User Guide. Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating. If any Fargate profiles in a cluster are in the DELETING status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster. For more information, see AWS Fargate Profile in the Amazon EKS User Guide.
   */
  createFargateProfile(callback?: (err: AWSError, data: EKS.Types.CreateFargateProfileResponse) => void): Request<EKS.Types.CreateFargateProfileResponse, AWSError>;
  /**
   * Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see Launch template support. An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by AWS for an Amazon EKS cluster. Each node group uses a version of the Amazon EKS optimized Amazon Linux 2 AMI. For more information, see Managed Node Groups in the Amazon EKS User Guide. 
   */
  createNodegroup(params: EKS.Types.CreateNodegroupRequest, callback?: (err: AWSError, data: EKS.Types.CreateNodegroupResponse) => void): Request<EKS.Types.CreateNodegroupResponse, AWSError>;
  /**
   * Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For more information about using launch templates, see Launch template support. An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by AWS for an Amazon EKS cluster. Each node group uses a version of the Amazon EKS optimized Amazon Linux 2 AMI. For more information, see Managed Node Groups in the Amazon EKS User Guide. 
   */
  createNodegroup(callback?: (err: AWSError, data: EKS.Types.CreateNodegroupResponse) => void): Request<EKS.Types.CreateNodegroupResponse, AWSError>;
  /**
   * Delete an Amazon EKS add-on. When you remove the add-on, it will also be deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API.
   */
  deleteAddon(params: EKS.Types.DeleteAddonRequest, callback?: (err: AWSError, data: EKS.Types.DeleteAddonResponse) => void): Request<EKS.Types.DeleteAddonResponse, AWSError>;
  /**
   * Delete an Amazon EKS add-on. When you remove the add-on, it will also be deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API.
   */
  deleteAddon(callback?: (err: AWSError, data: EKS.Types.DeleteAddonResponse) => void): Request<EKS.Types.DeleteAddonResponse, AWSError>;
  /**
   * Deletes the Amazon EKS cluster control plane. If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see Deleting a Cluster in the Amazon EKS User Guide. If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see DeleteNodegroup and DeleteFargateProfile.
   */
  deleteCluster(params: EKS.Types.DeleteClusterRequest, callback?: (err: AWSError, data: EKS.Types.DeleteClusterResponse) => void): Request<EKS.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes the Amazon EKS cluster control plane. If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see Deleting a Cluster in the Amazon EKS User Guide. If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see DeleteNodegroup and DeleteFargateProfile.
   */
  deleteCluster(callback?: (err: AWSError, data: EKS.Types.DeleteClusterResponse) => void): Request<EKS.Types.DeleteClusterResponse, AWSError>;
  /**
   * Deletes an AWS Fargate profile. When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then they are not scheduled on Fargate and they may remain in a pending state. Only one Fargate profile in a cluster can be in the DELETING status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.
   */
  deleteFargateProfile(params: EKS.Types.DeleteFargateProfileRequest, callback?: (err: AWSError, data: EKS.Types.DeleteFargateProfileResponse) => void): Request<EKS.Types.DeleteFargateProfileResponse, AWSError>;
  /**
   * Deletes an AWS Fargate profile. When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then they are not scheduled on Fargate and they may remain in a pending state. Only one Fargate profile in a cluster can be in the DELETING status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.
   */
  deleteFargateProfile(callback?: (err: AWSError, data: EKS.Types.DeleteFargateProfileResponse) => void): Request<EKS.Types.DeleteFargateProfileResponse, AWSError>;
  /**
   * Deletes an Amazon EKS node group for a cluster.
   */
  deleteNodegroup(params: EKS.Types.DeleteNodegroupRequest, callback?: (err: AWSError, data: EKS.Types.DeleteNodegroupResponse) => void): Request<EKS.Types.DeleteNodegroupResponse, AWSError>;
  /**
   * Deletes an Amazon EKS node group for a cluster.
   */
  deleteNodegroup(callback?: (err: AWSError, data: EKS.Types.DeleteNodegroupResponse) => void): Request<EKS.Types.DeleteNodegroupResponse, AWSError>;
  /**
   * Describes an Amazon EKS add-on.
   */
  describeAddon(params: EKS.Types.DescribeAddonRequest, callback?: (err: AWSError, data: EKS.Types.DescribeAddonResponse) => void): Request<EKS.Types.DescribeAddonResponse, AWSError>;
  /**
   * Describes an Amazon EKS add-on.
   */
  describeAddon(callback?: (err: AWSError, data: EKS.Types.DescribeAddonResponse) => void): Request<EKS.Types.DescribeAddonResponse, AWSError>;
  /**
   * Describes the Kubernetes versions that the add-on can be used with.
   */
  describeAddonVersions(params: EKS.Types.DescribeAddonVersionsRequest, callback?: (err: AWSError, data: EKS.Types.DescribeAddonVersionsResponse) => void): Request<EKS.Types.DescribeAddonVersionsResponse, AWSError>;
  /**
   * Describes the Kubernetes versions that the add-on can be used with.
   */
  describeAddonVersions(callback?: (err: AWSError, data: EKS.Types.DescribeAddonVersionsResponse) => void): Request<EKS.Types.DescribeAddonVersionsResponse, AWSError>;
  /**
   * Returns descriptive information about an Amazon EKS cluster. The API server endpoint and certificate authority data returned by this operation are required for kubelet and kubectl to communicate with your Kubernetes API server. For more information, see Create a kubeconfig for Amazon EKS.  The API server endpoint and certificate authority data aren't available until the cluster reaches the ACTIVE state. 
   */
  describeCluster(params: EKS.Types.DescribeClusterRequest, callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Returns descriptive information about an Amazon EKS cluster. The API server endpoint and certificate authority data returned by this operation are required for kubelet and kubectl to communicate with your Kubernetes API server. For more information, see Create a kubeconfig for Amazon EKS.  The API server endpoint and certificate authority data aren't available until the cluster reaches the ACTIVE state. 
   */
  describeCluster(callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Returns descriptive information about an AWS Fargate profile.
   */
  describeFargateProfile(params: EKS.Types.DescribeFargateProfileRequest, callback?: (err: AWSError, data: EKS.Types.DescribeFargateProfileResponse) => void): Request<EKS.Types.DescribeFargateProfileResponse, AWSError>;
  /**
   * Returns descriptive information about an AWS Fargate profile.
   */
  describeFargateProfile(callback?: (err: AWSError, data: EKS.Types.DescribeFargateProfileResponse) => void): Request<EKS.Types.DescribeFargateProfileResponse, AWSError>;
  /**
   * Returns descriptive information about an identity provider configuration.
   */
  describeIdentityProviderConfig(params: EKS.Types.DescribeIdentityProviderConfigRequest, callback?: (err: AWSError, data: EKS.Types.DescribeIdentityProviderConfigResponse) => void): Request<EKS.Types.DescribeIdentityProviderConfigResponse, AWSError>;
  /**
   * Returns descriptive information about an identity provider configuration.
   */
  describeIdentityProviderConfig(callback?: (err: AWSError, data: EKS.Types.DescribeIdentityProviderConfigResponse) => void): Request<EKS.Types.DescribeIdentityProviderConfigResponse, AWSError>;
  /**
   * Returns descriptive information about an Amazon EKS node group.
   */
  describeNodegroup(params: EKS.Types.DescribeNodegroupRequest, callback?: (err: AWSError, data: EKS.Types.DescribeNodegroupResponse) => void): Request<EKS.Types.DescribeNodegroupResponse, AWSError>;
  /**
   * Returns descriptive information about an Amazon EKS node group.
   */
  describeNodegroup(callback?: (err: AWSError, data: EKS.Types.DescribeNodegroupResponse) => void): Request<EKS.Types.DescribeNodegroupResponse, AWSError>;
  /**
   * Returns descriptive information about an update against your Amazon EKS cluster or associated managed node group. When the status of the update is Succeeded, the update is complete. If an update fails, the status is Failed, and an error detail explains the reason for the failure.
   */
  describeUpdate(params: EKS.Types.DescribeUpdateRequest, callback?: (err: AWSError, data: EKS.Types.DescribeUpdateResponse) => void): Request<EKS.Types.DescribeUpdateResponse, AWSError>;
  /**
   * Returns descriptive information about an update against your Amazon EKS cluster or associated managed node group. When the status of the update is Succeeded, the update is complete. If an update fails, the status is Failed, and an error detail explains the reason for the failure.
   */
  describeUpdate(callback?: (err: AWSError, data: EKS.Types.DescribeUpdateResponse) => void): Request<EKS.Types.DescribeUpdateResponse, AWSError>;
  /**
   * Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with AWS IAM users.
   */
  disassociateIdentityProviderConfig(params: EKS.Types.DisassociateIdentityProviderConfigRequest, callback?: (err: AWSError, data: EKS.Types.DisassociateIdentityProviderConfigResponse) => void): Request<EKS.Types.DisassociateIdentityProviderConfigResponse, AWSError>;
  /**
   * Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with AWS IAM users.
   */
  disassociateIdentityProviderConfig(callback?: (err: AWSError, data: EKS.Types.DisassociateIdentityProviderConfigResponse) => void): Request<EKS.Types.DisassociateIdentityProviderConfigResponse, AWSError>;
  /**
   * Lists the available add-ons.
   */
  listAddons(params: EKS.Types.ListAddonsRequest, callback?: (err: AWSError, data: EKS.Types.ListAddonsResponse) => void): Request<EKS.Types.ListAddonsResponse, AWSError>;
  /**
   * Lists the available add-ons.
   */
  listAddons(callback?: (err: AWSError, data: EKS.Types.ListAddonsResponse) => void): Request<EKS.Types.ListAddonsResponse, AWSError>;
  /**
   * Lists the Amazon EKS clusters in your AWS account in the specified Region.
   */
  listClusters(params: EKS.Types.ListClustersRequest, callback?: (err: AWSError, data: EKS.Types.ListClustersResponse) => void): Request<EKS.Types.ListClustersResponse, AWSError>;
  /**
   * Lists the Amazon EKS clusters in your AWS account in the specified Region.
   */
  listClusters(callback?: (err: AWSError, data: EKS.Types.ListClustersResponse) => void): Request<EKS.Types.ListClustersResponse, AWSError>;
  /**
   * Lists the AWS Fargate profiles associated with the specified cluster in your AWS account in the specified Region.
   */
  listFargateProfiles(params: EKS.Types.ListFargateProfilesRequest, callback?: (err: AWSError, data: EKS.Types.ListFargateProfilesResponse) => void): Request<EKS.Types.ListFargateProfilesResponse, AWSError>;
  /**
   * Lists the AWS Fargate profiles associated with the specified cluster in your AWS account in the specified Region.
   */
  listFargateProfiles(callback?: (err: AWSError, data: EKS.Types.ListFargateProfilesResponse) => void): Request<EKS.Types.ListFargateProfilesResponse, AWSError>;
  /**
   * A list of identity provider configurations.
   */
  listIdentityProviderConfigs(params: EKS.Types.ListIdentityProviderConfigsRequest, callback?: (err: AWSError, data: EKS.Types.ListIdentityProviderConfigsResponse) => void): Request<EKS.Types.ListIdentityProviderConfigsResponse, AWSError>;
  /**
   * A list of identity provider configurations.
   */
  listIdentityProviderConfigs(callback?: (err: AWSError, data: EKS.Types.ListIdentityProviderConfigsResponse) => void): Request<EKS.Types.ListIdentityProviderConfigsResponse, AWSError>;
  /**
   * Lists the Amazon EKS managed node groups associated with the specified cluster in your AWS account in the specified Region. Self-managed node groups are not listed.
   */
  listNodegroups(params: EKS.Types.ListNodegroupsRequest, callback?: (err: AWSError, data: EKS.Types.ListNodegroupsResponse) => void): Request<EKS.Types.ListNodegroupsResponse, AWSError>;
  /**
   * Lists the Amazon EKS managed node groups associated with the specified cluster in your AWS account in the specified Region. Self-managed node groups are not listed.
   */
  listNodegroups(callback?: (err: AWSError, data: EKS.Types.ListNodegroupsResponse) => void): Request<EKS.Types.ListNodegroupsResponse, AWSError>;
  /**
   * List the tags for an Amazon EKS resource.
   */
  listTagsForResource(params: EKS.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: EKS.Types.ListTagsForResourceResponse) => void): Request<EKS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * List the tags for an Amazon EKS resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: EKS.Types.ListTagsForResourceResponse) => void): Request<EKS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the updates associated with an Amazon EKS cluster or managed node group in your AWS account, in the specified Region.
   */
  listUpdates(params: EKS.Types.ListUpdatesRequest, callback?: (err: AWSError, data: EKS.Types.ListUpdatesResponse) => void): Request<EKS.Types.ListUpdatesResponse, AWSError>;
  /**
   * Lists the updates associated with an Amazon EKS cluster or managed node group in your AWS account, in the specified Region.
   */
  listUpdates(callback?: (err: AWSError, data: EKS.Types.ListUpdatesResponse) => void): Request<EKS.Types.ListUpdatesResponse, AWSError>;
  /**
   * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag does not automatically propagate to the subnets and nodes associated with the cluster.
   */
  tagResource(params: EKS.Types.TagResourceRequest, callback?: (err: AWSError, data: EKS.Types.TagResourceResponse) => void): Request<EKS.Types.TagResourceResponse, AWSError>;
  /**
   * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag does not automatically propagate to the subnets and nodes associated with the cluster.
   */
  tagResource(callback?: (err: AWSError, data: EKS.Types.TagResourceResponse) => void): Request<EKS.Types.TagResourceResponse, AWSError>;
  /**
   * Deletes specified tags from a resource.
   */
  untagResource(params: EKS.Types.UntagResourceRequest, callback?: (err: AWSError, data: EKS.Types.UntagResourceResponse) => void): Request<EKS.Types.UntagResourceResponse, AWSError>;
  /**
   * Deletes specified tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: EKS.Types.UntagResourceResponse) => void): Request<EKS.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an Amazon EKS add-on.
   */
  updateAddon(params: EKS.Types.UpdateAddonRequest, callback?: (err: AWSError, data: EKS.Types.UpdateAddonResponse) => void): Request<EKS.Types.UpdateAddonResponse, AWSError>;
  /**
   * Updates an Amazon EKS add-on.
   */
  updateAddon(callback?: (err: AWSError, data: EKS.Types.UpdateAddonResponse) => void): Request<EKS.Types.UpdateAddonResponse, AWSError>;
  /**
   * Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing.  You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .   You can't update the subnets or security group IDs for an existing cluster.  Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active.
   */
  updateClusterConfig(params: EKS.Types.UpdateClusterConfigRequest, callback?: (err: AWSError, data: EKS.Types.UpdateClusterConfigResponse) => void): Request<EKS.Types.UpdateClusterConfigResponse, AWSError>;
  /**
   * Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing.  You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .   You can't update the subnets or security group IDs for an existing cluster.  Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active.
   */
  updateClusterConfig(callback?: (err: AWSError, data: EKS.Types.UpdateClusterConfigResponse) => void): Request<EKS.Types.UpdateClusterConfigResponse, AWSError>;
  /**
   * Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active. If your cluster has managed node groups attached to it, all of your node groups’ Kubernetes versions must match the cluster’s Kubernetes version in order to update the cluster to a new Kubernetes version.
   */
  updateClusterVersion(params: EKS.Types.UpdateClusterVersionRequest, callback?: (err: AWSError, data: EKS.Types.UpdateClusterVersionResponse) => void): Request<EKS.Types.UpdateClusterVersionResponse, AWSError>;
  /**
   * Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the DescribeUpdate API operation. Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to UPDATING (this status transition is eventually consistent). When the update is complete (either Failed or Successful), the cluster status moves to Active. If your cluster has managed node groups attached to it, all of your node groups’ Kubernetes versions must match the cluster’s Kubernetes version in order to update the cluster to a new Kubernetes version.
   */
  updateClusterVersion(callback?: (err: AWSError, data: EKS.Types.UpdateClusterVersionResponse) => void): Request<EKS.Types.UpdateClusterVersionResponse, AWSError>;
  /**
   * Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the DescribeUpdate API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.
   */
  updateNodegroupConfig(params: EKS.Types.UpdateNodegroupConfigRequest, callback?: (err: AWSError, data: EKS.Types.UpdateNodegroupConfigResponse) => void): Request<EKS.Types.UpdateNodegroupConfigResponse, AWSError>;
  /**
   * Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the DescribeUpdate API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.
   */
  updateNodegroupConfig(callback?: (err: AWSError, data: EKS.Types.UpdateNodegroupConfigResponse) => void): Request<EKS.Types.UpdateNodegroupConfigResponse, AWSError>;
  /**
   * Updates the Kubernetes version or AMI version of an Amazon EKS managed node group. You can update a node group using a launch template only if the node group was originally deployed with a launch template. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template. If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For more information, see Amazon EKS optimized Amazon Linux 2 AMI versions in the Amazon EKS User Guide. You cannot roll back a node group to an earlier Kubernetes version or AMI version. When a node in a managed node group is terminated due to a scaling action or update, the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can force the update if Amazon EKS is unable to drain the nodes as a result of a pod disruption budget issue.
   */
  updateNodegroupVersion(params: EKS.Types.UpdateNodegroupVersionRequest, callback?: (err: AWSError, data: EKS.Types.UpdateNodegroupVersionResponse) => void): Request<EKS.Types.UpdateNodegroupVersionResponse, AWSError>;
  /**
   * Updates the Kubernetes version or AMI version of an Amazon EKS managed node group. You can update a node group using a launch template only if the node group was originally deployed with a launch template. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template. If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For more information, see Amazon EKS optimized Amazon Linux 2 AMI versions in the Amazon EKS User Guide. You cannot roll back a node group to an earlier Kubernetes version or AMI version. When a node in a managed node group is terminated due to a scaling action or update, the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can force the update if Amazon EKS is unable to drain the nodes as a result of a pod disruption budget issue.
   */
  updateNodegroupVersion(callback?: (err: AWSError, data: EKS.Types.UpdateNodegroupVersionResponse) => void): Request<EKS.Types.UpdateNodegroupVersionResponse, AWSError>;
  /**
   * Waits for the clusterActive state by periodically calling the underlying EKS.describeClusteroperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "clusterActive", params: EKS.Types.DescribeClusterRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Waits for the clusterActive state by periodically calling the underlying EKS.describeClusteroperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "clusterActive", callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Waits for the clusterDeleted state by periodically calling the underlying EKS.describeClusteroperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "clusterDeleted", params: EKS.Types.DescribeClusterRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Waits for the clusterDeleted state by periodically calling the underlying EKS.describeClusteroperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "clusterDeleted", callback?: (err: AWSError, data: EKS.Types.DescribeClusterResponse) => void): Request<EKS.Types.DescribeClusterResponse, AWSError>;
  /**
   * Waits for the nodegroupActive state by periodically calling the underlying EKS.describeNodegroupoperation every 30 seconds (at most 80 times).
   */
  waitFor(state: "nodegroupActive", params: EKS.Types.DescribeNodegroupRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: EKS.Types.DescribeNodegroupResponse) => void): Request<EKS.Types.DescribeNodegroupResponse, AWSError>;
  /**
   * Waits for the nodegroupActive state by periodically calling the underlying EKS.describeNodegroupoperation every 30 seconds (at most 80 times).
   */
  waitFor(state: "nodegroupActive", callback?: (err: AWSError, data: EKS.Types.DescribeNodegroupResponse) => void): Request<EKS.Types.DescribeNodegroupResponse, AWSError>;
  /**
   * Waits for the nodegroupDeleted state by periodically calling the underlying EKS.describeNodegroupoperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "nodegroupDeleted", params: EKS.Types.DescribeNodegroupRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: EKS.Types.DescribeNodegroupResponse) => void): Request<EKS.Types.DescribeNodegroupResponse, AWSError>;
  /**
   * Waits for the nodegroupDeleted state by periodically calling the underlying EKS.describeNodegroupoperation every 30 seconds (at most 40 times).
   */
  waitFor(state: "nodegroupDeleted", callback?: (err: AWSError, data: EKS.Types.DescribeNodegroupResponse) => void): Request<EKS.Types.DescribeNodegroupResponse, AWSError>;
  /**
   * Waits for the addonActive state by periodically calling the underlying EKS.describeAddonoperation every 10 seconds (at most 60 times).
   */
  waitFor(state: "addonActive", params: EKS.Types.DescribeAddonRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: EKS.Types.DescribeAddonResponse) => void): Request<EKS.Types.DescribeAddonResponse, AWSError>;
  /**
   * Waits for the addonActive state by periodically calling the underlying EKS.describeAddonoperation every 10 seconds (at most 60 times).
   */
  waitFor(state: "addonActive", callback?: (err: AWSError, data: EKS.Types.DescribeAddonResponse) => void): Request<EKS.Types.DescribeAddonResponse, AWSError>;
  /**
   * Waits for the addonDeleted state by periodically calling the underlying EKS.describeAddonoperation every 10 seconds (at most 60 times).
   */
  waitFor(state: "addonDeleted", params: EKS.Types.DescribeAddonRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: EKS.Types.DescribeAddonResponse) => void): Request<EKS.Types.DescribeAddonResponse, AWSError>;
  /**
   * Waits for the addonDeleted state by periodically calling the underlying EKS.describeAddonoperation every 10 seconds (at most 60 times).
   */
  waitFor(state: "addonDeleted", callback?: (err: AWSError, data: EKS.Types.DescribeAddonResponse) => void): Request<EKS.Types.DescribeAddonResponse, AWSError>;
}
declare namespace EKS {
  export type AMITypes = "AL2_x86_64"|"AL2_x86_64_GPU"|"AL2_ARM_64"|"CUSTOM"|string;
  export interface Addon {
    /**
     * The name of the add-on.
     */
    addonName?: String;
    /**
     * The name of the cluster.
     */
    clusterName?: ClusterName;
    /**
     * The status of the add-on.
     */
    status?: AddonStatus;
    /**
     * The version of the add-on.
     */
    addonVersion?: String;
    /**
     * An object that represents the health of the add-on.
     */
    health?: AddonHealth;
    /**
     * The Amazon Resource Name (ARN) of the add-on.
     */
    addonArn?: String;
    /**
     * The date and time that the add-on was created.
     */
    createdAt?: Timestamp;
    /**
     * The date and time that the add-on was last modified.
     */
    modifiedAt?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that is bound to the Kubernetes service account used by the add-on.
     */
    serviceAccountRoleArn?: String;
    /**
     * The metadata that you apply to the add-on to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Add-on tags do not propagate to any other resources associated with the cluster. 
     */
    tags?: TagMap;
  }
  export interface AddonHealth {
    /**
     * An object that represents the add-on's health issues.
     */
    issues?: AddonIssueList;
  }
  export interface AddonInfo {
    /**
     * The name of the add-on.
     */
    addonName?: String;
    /**
     * The type of the add-on.
     */
    type?: String;
    /**
     * An object that represents information about available add-on versions and compatible Kubernetes versions.
     */
    addonVersions?: AddonVersionInfoList;
  }
  export interface AddonIssue {
    /**
     * A code that describes the type of issue.
     */
    code?: AddonIssueCode;
    /**
     * A message that provides details about the issue and what might cause it.
     */
    message?: String;
    /**
     * The resource IDs of the issue.
     */
    resourceIds?: StringList;
  }
  export type AddonIssueCode = "AccessDenied"|"InternalFailure"|"ClusterUnreachable"|"InsufficientNumberOfReplicas"|"ConfigurationConflict"|"AdmissionRequestDenied"|"UnsupportedAddonModification"|string;
  export type AddonIssueList = AddonIssue[];
  export type AddonStatus = "CREATING"|"ACTIVE"|"CREATE_FAILED"|"UPDATING"|"DELETING"|"DELETE_FAILED"|"DEGRADED"|string;
  export interface AddonVersionInfo {
    /**
     * The version of the add-on.
     */
    addonVersion?: String;
    /**
     * The architectures that the version supports.
     */
    architecture?: StringList;
    /**
     * An object that represents the compatibilities of a version.
     */
    compatibilities?: Compatibilities;
  }
  export type AddonVersionInfoList = AddonVersionInfo[];
  export type Addons = AddonInfo[];
  export interface AssociateEncryptionConfigRequest {
    /**
     * The name of the cluster that you are associating with encryption configuration.
     */
    clusterName: String;
    /**
     * The configuration you are using for encryption.
     */
    encryptionConfig: EncryptionConfigList;
    /**
     * The client request token you are using with the encryption configuration.
     */
    clientRequestToken?: String;
  }
  export interface AssociateEncryptionConfigResponse {
    update?: Update;
  }
  export interface AssociateIdentityProviderConfigRequest {
    /**
     * The name of the cluster to associate the configuration to.
     */
    clusterName: String;
    /**
     * An object that represents an OpenID Connect (OIDC) identity provider configuration.
     */
    oidc: OidcIdentityProviderConfigRequest;
    /**
     * The metadata to apply to the configuration to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define.
     */
    tags?: TagMap;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface AssociateIdentityProviderConfigResponse {
    update?: Update;
    /**
     * The tags for the resource.
     */
    tags?: TagMap;
  }
  export interface AutoScalingGroup {
    /**
     * The name of the Auto Scaling group associated with an Amazon EKS managed node group.
     */
    name?: String;
  }
  export type AutoScalingGroupList = AutoScalingGroup[];
  export type Boolean = boolean;
  export type BoxedBoolean = boolean;
  export type BoxedInteger = number;
  export type Capacity = number;
  export type CapacityTypes = "ON_DEMAND"|"SPOT"|string;
  export interface Certificate {
    /**
     * The Base64-encoded certificate data required to communicate with your cluster. Add this to the certificate-authority-data section of the kubeconfig file for your cluster.
     */
    data?: String;
  }
  export interface Cluster {
    /**
     * The name of the cluster.
     */
    name?: String;
    /**
     * The Amazon Resource Name (ARN) of the cluster.
     */
    arn?: String;
    /**
     * The Unix epoch timestamp in seconds for when the cluster was created.
     */
    createdAt?: Timestamp;
    /**
     * The Kubernetes server version for the cluster.
     */
    version?: String;
    /**
     * The endpoint for your Kubernetes API server.
     */
    endpoint?: String;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.
     */
    roleArn?: String;
    /**
     * The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see Cluster VPC Considerations and Cluster Security Group Considerations in the Amazon EKS User Guide.
     */
    resourcesVpcConfig?: VpcConfigResponse;
    /**
     * The Kubernetes network configuration for the cluster.
     */
    kubernetesNetworkConfig?: KubernetesNetworkConfigResponse;
    /**
     * The logging configuration for your cluster.
     */
    logging?: Logging;
    /**
     * The identity provider information for the cluster.
     */
    identity?: Identity;
    /**
     * The current status of the cluster.
     */
    status?: ClusterStatus;
    /**
     * The certificate-authority-data for your cluster.
     */
    certificateAuthority?: Certificate;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * The platform version of your Amazon EKS cluster. For more information, see Platform Versions in the  Amazon EKS User Guide .
     */
    platformVersion?: String;
    /**
     * The metadata that you apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Cluster tags do not propagate to any other resources associated with the cluster. 
     */
    tags?: TagMap;
    /**
     * The encryption configuration for the cluster.
     */
    encryptionConfig?: EncryptionConfigList;
  }
  export type ClusterName = string;
  export type ClusterStatus = "CREATING"|"ACTIVE"|"DELETING"|"FAILED"|"UPDATING"|string;
  export type Compatibilities = Compatibility[];
  export interface Compatibility {
    /**
     * The supported Kubernetes version of the cluster.
     */
    clusterVersion?: String;
    /**
     * The supported compute platform.
     */
    platformVersions?: StringList;
    /**
     * The supported default version.
     */
    defaultVersion?: Boolean;
  }
  export interface CreateAddonRequest {
    /**
     * The name of the cluster to create the add-on for.
     */
    clusterName: ClusterName;
    /**
     * The name of the add-on. The name must match one of the names returned by  ListAddons .
     */
    addonName: String;
    /**
     * The version of the add-on. The version must match one of the versions returned by  DescribeAddonVersions .
     */
    addonVersion?: String;
    /**
     * The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see Amazon EKS node IAM role in the Amazon EKS User Guide.  To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see Enabling IAM roles for service accounts on your cluster in the Amazon EKS User Guide. 
     */
    serviceAccountRoleArn?: RoleArn;
    /**
     * How to resolve parameter value conflicts when migrating an existing add-on to an Amazon EKS add-on.
     */
    resolveConflicts?: ResolveConflicts;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. 
     */
    tags?: TagMap;
  }
  export interface CreateAddonResponse {
    addon?: Addon;
  }
  export interface CreateClusterRequest {
    /**
     * The unique name to give to your cluster.
     */
    name: ClusterName;
    /**
     * The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used.
     */
    version?: String;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. For more information, see Amazon EKS Service IAM Role in the  Amazon EKS User Guide .
     */
    roleArn: String;
    /**
     * The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see Cluster VPC Considerations and Cluster Security Group Considerations in the Amazon EKS User Guide. You must specify at least two subnets. You can specify up to five security groups, but we recommend that you use a dedicated security group for your cluster control plane.
     */
    resourcesVpcConfig: VpcConfigRequest;
    /**
     * The Kubernetes network configuration for the cluster.
     */
    kubernetesNetworkConfig?: KubernetesNetworkConfigRequest;
    /**
     * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing. 
     */
    logging?: Logging;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define.
     */
    tags?: TagMap;
    /**
     * The encryption configuration for the cluster.
     */
    encryptionConfig?: EncryptionConfigList;
  }
  export interface CreateClusterResponse {
    /**
     * The full description of your new cluster.
     */
    cluster?: Cluster;
  }
  export interface CreateFargateProfileRequest {
    /**
     * The name of the Fargate profile.
     */
    fargateProfileName: String;
    /**
     * The name of the Amazon EKS cluster to apply the Fargate profile to.
     */
    clusterName: String;
    /**
     * The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in the Fargate profile. The pod execution role allows Fargate infrastructure to register with your cluster as a node, and it provides read access to Amazon ECR image repositories. For more information, see Pod Execution Role in the Amazon EKS User Guide.
     */
    podExecutionRoleArn: String;
    /**
     * The IDs of subnets to launch your pods into. At this time, pods running on Fargate are not assigned public IP addresses, so only private subnets (with no direct route to an Internet Gateway) are accepted for this parameter.
     */
    subnets?: StringList;
    /**
     * The selectors to match for pods to use this Fargate profile. Each selector must have an associated namespace. Optionally, you can also specify labels for a namespace. You may specify up to five selectors in a Fargate profile.
     */
    selectors?: FargateProfileSelectors;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * The metadata to apply to the Fargate profile to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Fargate profile tags do not propagate to any other resources associated with the Fargate profile, such as the pods that are scheduled with it.
     */
    tags?: TagMap;
  }
  export interface CreateFargateProfileResponse {
    /**
     * The full description of your new Fargate profile.
     */
    fargateProfile?: FargateProfile;
  }
  export interface CreateNodegroupRequest {
    /**
     * The name of the cluster to create the node group in.
     */
    clusterName: String;
    /**
     * The unique name to give your node group.
     */
    nodegroupName: String;
    /**
     * The scaling configuration details for the Auto Scaling group that is created for your node group.
     */
    scalingConfig?: NodegroupScalingConfig;
    /**
     * The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB. If you specify launchTemplate, then don't specify diskSize, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide.
     */
    diskSize?: BoxedInteger;
    /**
     * The subnets to use for the Auto Scaling group that is created for your node group. If you specify launchTemplate, then don't specify  SubnetId  in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide.
     */
    subnets: StringList;
    /**
     * Specify the instance types for a node group. If you specify a GPU instance type, be sure to specify AL2_x86_64_GPU with the amiType parameter. If you specify launchTemplate, then you can specify zero or one instance type in your launch template or you can specify 0-20 instance types for instanceTypes. If however, you specify an instance type in your launch template and specify any instanceTypes, the node group deployment will fail. If you don't specify an instance type in a launch template or for instanceTypes, then t3.medium is used, by default. If you specify Spot for capacityType, then we recommend specifying multiple values for instanceTypes. For more information, see Managed node group capacity types and Launch template support in the Amazon EKS User Guide.
     */
    instanceTypes?: StringList;
    /**
     * The AMI type for your node group. GPU instance types should use the AL2_x86_64_GPU AMI type. Non-GPU instances should use the AL2_x86_64 AMI type. Arm instances should use the AL2_ARM_64 AMI type. All types use the Amazon EKS optimized Amazon Linux 2 AMI. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify amiType, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide.
     */
    amiType?: AMITypes;
    /**
     * The remote access (SSH) configuration to use with your node group. If you specify launchTemplate, then don't specify remoteAccess, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide.
     */
    remoteAccess?: RemoteAccessConfig;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node kubelet daemon makes calls to AWS APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched. For more information, see Amazon EKS node IAM role in the  Amazon EKS User Guide . If you specify launchTemplate, then don't specify  IamInstanceProfile  in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide.
     */
    nodeRole: String;
    /**
     * The Kubernetes labels to be applied to the nodes in the node group when they are created.
     */
    labels?: labelsMap;
    /**
     * The Kubernetes taints to be applied to the nodes in the node group.
     */
    taints?: taintsList;
    /**
     * The metadata to apply to the node group to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets.
     */
    tags?: TagMap;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
    /**
     * An object representing a node group's launch template specification. If specified, then do not specify instanceTypes, diskSize, or remoteAccess and make sure that the launch template meets the requirements in launchTemplateSpecification.
     */
    launchTemplate?: LaunchTemplateSpecification;
    updateConfig?: NodegroupUpdateConfig;
    /**
     * The capacity type for your node group.
     */
    capacityType?: CapacityTypes;
    /**
     * The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify version, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide.
     */
    version?: String;
    /**
     * The AMI version of the Amazon EKS optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For more information, see Amazon EKS optimized Amazon Linux 2 AMI versions in the Amazon EKS User Guide. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify releaseVersion, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide.
     */
    releaseVersion?: String;
  }
  export interface CreateNodegroupResponse {
    /**
     * The full description of your new node group.
     */
    nodegroup?: Nodegroup;
  }
  export interface DeleteAddonRequest {
    /**
     * The name of the cluster to delete the add-on from.
     */
    clusterName: ClusterName;
    /**
     * The name of the add-on. The name must match one of the names returned by  ListAddons .
     */
    addonName: String;
  }
  export interface DeleteAddonResponse {
    addon?: Addon;
  }
  export interface DeleteClusterRequest {
    /**
     * The name of the cluster to delete.
     */
    name: String;
  }
  export interface DeleteClusterResponse {
    /**
     * The full description of the cluster to delete.
     */
    cluster?: Cluster;
  }
  export interface DeleteFargateProfileRequest {
    /**
     * The name of the Amazon EKS cluster associated with the Fargate profile to delete.
     */
    clusterName: String;
    /**
     * The name of the Fargate profile to delete.
     */
    fargateProfileName: String;
  }
  export interface DeleteFargateProfileResponse {
    /**
     * The deleted Fargate profile.
     */
    fargateProfile?: FargateProfile;
  }
  export interface DeleteNodegroupRequest {
    /**
     * The name of the Amazon EKS cluster that is associated with your node group.
     */
    clusterName: String;
    /**
     * The name of the node group to delete.
     */
    nodegroupName: String;
  }
  export interface DeleteNodegroupResponse {
    /**
     * The full description of your deleted node group.
     */
    nodegroup?: Nodegroup;
  }
  export interface DescribeAddonRequest {
    /**
     * The name of the cluster.
     */
    clusterName: ClusterName;
    /**
     * The name of the add-on. The name must match one of the names returned by  ListAddons .
     */
    addonName: String;
  }
  export interface DescribeAddonResponse {
    addon?: Addon;
  }
  export interface DescribeAddonVersionsRequest {
    /**
     * The Kubernetes versions that the add-on can be used with.
     */
    kubernetesVersion?: String;
    /**
     * The maximum number of results to return.
     */
    maxResults?: DescribeAddonVersionsRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated DescribeAddonVersionsRequest where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
    /**
     * The name of the add-on. The name must match one of the names returned by  ListAddons .
     */
    addonName?: String;
  }
  export type DescribeAddonVersionsRequestMaxResults = number;
  export interface DescribeAddonVersionsResponse {
    /**
     * The list of available versions with Kubernetes version compatibility.
     */
    addons?: Addons;
    /**
     * The nextToken value returned from a previous paginated DescribeAddonVersionsResponse where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface DescribeClusterRequest {
    /**
     * The name of the cluster to describe.
     */
    name: String;
  }
  export interface DescribeClusterResponse {
    /**
     * The full description of your specified cluster.
     */
    cluster?: Cluster;
  }
  export interface DescribeFargateProfileRequest {
    /**
     * The name of the Amazon EKS cluster associated with the Fargate profile.
     */
    clusterName: String;
    /**
     * The name of the Fargate profile to describe.
     */
    fargateProfileName: String;
  }
  export interface DescribeFargateProfileResponse {
    /**
     * The full description of your Fargate profile.
     */
    fargateProfile?: FargateProfile;
  }
  export interface DescribeIdentityProviderConfigRequest {
    /**
     * The cluster name that the identity provider configuration is associated to.
     */
    clusterName: String;
    /**
     * An object that represents an identity provider configuration.
     */
    identityProviderConfig: IdentityProviderConfig;
  }
  export interface DescribeIdentityProviderConfigResponse {
    /**
     * The object that represents an OpenID Connect (OIDC) identity provider configuration.
     */
    identityProviderConfig?: IdentityProviderConfigResponse;
  }
  export interface DescribeNodegroupRequest {
    /**
     * The name of the Amazon EKS cluster associated with the node group.
     */
    clusterName: String;
    /**
     * The name of the node group to describe.
     */
    nodegroupName: String;
  }
  export interface DescribeNodegroupResponse {
    /**
     * The full description of your node group.
     */
    nodegroup?: Nodegroup;
  }
  export interface DescribeUpdateRequest {
    /**
     * The name of the Amazon EKS cluster associated with the update.
     */
    name: String;
    /**
     * The ID of the update to describe.
     */
    updateId: String;
    /**
     * The name of the Amazon EKS node group associated with the update.
     */
    nodegroupName?: String;
    /**
     * The name of the add-on. The name must match one of the names returned by  ListAddons .
     */
    addonName?: String;
  }
  export interface DescribeUpdateResponse {
    /**
     * The full description of the specified update.
     */
    update?: Update;
  }
  export interface DisassociateIdentityProviderConfigRequest {
    /**
     * The name of the cluster to disassociate an identity provider from.
     */
    clusterName: String;
    /**
     * An object that represents an identity provider configuration.
     */
    identityProviderConfig: IdentityProviderConfig;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface DisassociateIdentityProviderConfigResponse {
    update?: Update;
  }
  export interface EncryptionConfig {
    /**
     * Specifies the resources to be encrypted. The only supported value is "secrets".
     */
    resources?: StringList;
    /**
     * AWS Key Management Service (AWS KMS) key. Either the ARN or the alias can be used.
     */
    provider?: Provider;
  }
  export type EncryptionConfigList = EncryptionConfig[];
  export type ErrorCode = "SubnetNotFound"|"SecurityGroupNotFound"|"EniLimitReached"|"IpNotAvailable"|"AccessDenied"|"OperationNotPermitted"|"VpcIdNotFound"|"Unknown"|"NodeCreationFailure"|"PodEvictionFailure"|"InsufficientFreeAddresses"|"ClusterUnreachable"|"InsufficientNumberOfReplicas"|"ConfigurationConflict"|"AdmissionRequestDenied"|"UnsupportedAddonModification"|string;
  export interface ErrorDetail {
    /**
     * A brief description of the error.     SubnetNotFound: We couldn't find one of the subnets associated with the cluster.    SecurityGroupNotFound: We couldn't find one of the security groups associated with the cluster.    EniLimitReached: You have reached the elastic network interface limit for your account.    IpNotAvailable: A subnet associated with the cluster doesn't have any free IP addresses.    AccessDenied: You don't have permissions to perform the specified operation.    OperationNotPermitted: The service role associated with the cluster doesn't have the required access permissions for Amazon EKS.    VpcIdNotFound: We couldn't find the VPC associated with the cluster.  
     */
    errorCode?: ErrorCode;
    /**
     * A more complete description of the error.
     */
    errorMessage?: String;
    /**
     * An optional field that contains the resource IDs associated with the error.
     */
    resourceIds?: StringList;
  }
  export type ErrorDetails = ErrorDetail[];
  export interface FargateProfile {
    /**
     * The name of the Fargate profile.
     */
    fargateProfileName?: String;
    /**
     * The full Amazon Resource Name (ARN) of the Fargate profile.
     */
    fargateProfileArn?: String;
    /**
     * The name of the Amazon EKS cluster that the Fargate profile belongs to.
     */
    clusterName?: String;
    /**
     * The Unix epoch timestamp in seconds for when the Fargate profile was created.
     */
    createdAt?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in the Fargate profile. For more information, see Pod Execution Role in the Amazon EKS User Guide.
     */
    podExecutionRoleArn?: String;
    /**
     * The IDs of subnets to launch pods into.
     */
    subnets?: StringList;
    /**
     * The selectors to match for pods to use this Fargate profile.
     */
    selectors?: FargateProfileSelectors;
    /**
     * The current status of the Fargate profile.
     */
    status?: FargateProfileStatus;
    /**
     * The metadata applied to the Fargate profile to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Fargate profile tags do not propagate to any other resources associated with the Fargate profile, such as the pods that are scheduled with it.
     */
    tags?: TagMap;
  }
  export type FargateProfileLabel = {[key: string]: String};
  export interface FargateProfileSelector {
    /**
     * The Kubernetes namespace that the selector should match.
     */
    namespace?: String;
    /**
     * The Kubernetes labels that the selector should match. A pod must contain all of the labels that are specified in the selector for it to be considered a match.
     */
    labels?: FargateProfileLabel;
  }
  export type FargateProfileSelectors = FargateProfileSelector[];
  export type FargateProfileStatus = "CREATING"|"ACTIVE"|"DELETING"|"CREATE_FAILED"|"DELETE_FAILED"|string;
  export type FargateProfilesRequestMaxResults = number;
  export interface Identity {
    /**
     * An object representing the OpenID Connect identity provider information.
     */
    oidc?: OIDC;
  }
  export interface IdentityProviderConfig {
    /**
     * The type of the identity provider configuration.
     */
    type: String;
    /**
     * The name of the identity provider configuration.
     */
    name: String;
  }
  export interface IdentityProviderConfigResponse {
    /**
     * An object that represents an OpenID Connect (OIDC) identity provider configuration.
     */
    oidc?: OidcIdentityProviderConfig;
  }
  export type IdentityProviderConfigs = IdentityProviderConfig[];
  export interface Issue {
    /**
     * A brief description of the error.    AccessDenied: Amazon EKS or one or more of your managed nodes is failing to authenticate or authorize with your Kubernetes cluster API server.    AsgInstanceLaunchFailures: Your Auto Scaling group is experiencing failures while attempting to launch instances.    AutoScalingGroupNotFound: We couldn't find the Auto Scaling group associated with the managed node group. You may be able to recreate an Auto Scaling group with the same settings to recover.    ClusterUnreachable: Amazon EKS or one or more of your managed nodes is unable to to communicate with your Kubernetes cluster API server. This can happen if there are network disruptions or if API servers are timing out processing requests.     Ec2LaunchTemplateNotFound: We couldn't find the Amazon EC2 launch template for your managed node group. You may be able to recreate a launch template with the same settings to recover.    Ec2LaunchTemplateVersionMismatch: The Amazon EC2 launch template version for your managed node group does not match the version that Amazon EKS created. You may be able to revert to the version that Amazon EKS created to recover.    Ec2SecurityGroupDeletionFailure: We could not delete the remote access security group for your managed node group. Remove any dependencies from the security group.    Ec2SecurityGroupNotFound: We couldn't find the cluster security group for the cluster. You must recreate your cluster.    Ec2SubnetInvalidConfiguration: One or more Amazon EC2 subnets specified for a node group do not automatically assign public IP addresses to instances launched into it. If you want your instances to be assigned a public IP address, then you need to enable the auto-assign public IP address setting for the subnet. See Modifying the public IPv4 addressing attribute for your subnet in the Amazon VPC User Guide.    IamInstanceProfileNotFound: We couldn't find the IAM instance profile for your managed node group. You may be able to recreate an instance profile with the same settings to recover.    IamNodeRoleNotFound: We couldn't find the IAM role for your managed node group. You may be able to recreate an IAM role with the same settings to recover.    InstanceLimitExceeded: Your AWS account is unable to launch any more instances of the specified instance type. You may be able to request an Amazon EC2 instance limit increase to recover.    InsufficientFreeAddresses: One or more of the subnets associated with your managed node group does not have enough available IP addresses for new nodes.    InternalFailure: These errors are usually caused by an Amazon EKS server-side issue.    NodeCreationFailure: Your launched instances are unable to register with your Amazon EKS cluster. Common causes of this failure are insufficient node IAM role permissions or lack of outbound internet access for the nodes.   
     */
    code?: NodegroupIssueCode;
    /**
     * The error message associated with the issue.
     */
    message?: String;
    /**
     * The AWS resources that are afflicted by this issue.
     */
    resourceIds?: StringList;
  }
  export type IssueList = Issue[];
  export interface KubernetesNetworkConfigRequest {
    /**
     * The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC. The block must meet the following requirements:   Within one of the following private IP address blocks: 10.0.0.0/8, 172.16.0.0.0/12, or 192.168.0.0/16.   Doesn't overlap with any CIDR block assigned to the VPC that you selected for VPC.   Between /24 and /12.    You can only specify a custom CIDR block when you create a cluster and can't change this value once the cluster is created. 
     */
    serviceIpv4Cidr?: String;
  }
  export interface KubernetesNetworkConfigResponse {
    /**
     * The CIDR block that Kubernetes service IP addresses are assigned from. If you didn't specify a CIDR block when you created the cluster, then Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks. If this was specified, then it was specified when the cluster was created and it cannot be changed.
     */
    serviceIpv4Cidr?: String;
  }
  export interface LaunchTemplateSpecification {
    /**
     * The name of the launch template.
     */
    name?: String;
    /**
     * The version of the launch template to use. If no version is specified, then the template's default version is used.
     */
    version?: String;
    /**
     * The ID of the launch template.
     */
    id?: String;
  }
  export interface ListAddonsRequest {
    /**
     * The name of the cluster.
     */
    clusterName: ClusterName;
    /**
     * The maximum number of add-on results returned by ListAddonsRequest in paginated output. When you use this parameter, ListAddonsRequest returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListAddonsRequest request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListAddonsRequest returns up to 100 results and a nextToken value, if applicable.
     */
    maxResults?: ListAddonsRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated ListAddonsRequest where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export type ListAddonsRequestMaxResults = number;
  export interface ListAddonsResponse {
    /**
     * A list of available add-ons.
     */
    addons?: StringList;
    /**
     * The nextToken value returned from a previous paginated ListAddonsResponse where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface ListClustersRequest {
    /**
     * The maximum number of cluster results returned by ListClusters in paginated output. When you use this parameter, ListClusters returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListClusters request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListClusters returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: ListClustersRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated ListClusters request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.  This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export type ListClustersRequestMaxResults = number;
  export interface ListClustersResponse {
    /**
     * A list of all of the clusters for your account in the specified Region.
     */
    clusters?: StringList;
    /**
     * The nextToken value to include in a future ListClusters request. When the results of a ListClusters request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListFargateProfilesRequest {
    /**
     * The name of the Amazon EKS cluster that you would like to listFargate profiles in.
     */
    clusterName: String;
    /**
     * The maximum number of Fargate profile results returned by ListFargateProfiles in paginated output. When you use this parameter, ListFargateProfiles returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListFargateProfiles request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListFargateProfiles returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: FargateProfilesRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated ListFargateProfiles request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.
     */
    nextToken?: String;
  }
  export interface ListFargateProfilesResponse {
    /**
     * A list of all of the Fargate profiles associated with the specified cluster.
     */
    fargateProfileNames?: StringList;
    /**
     * The nextToken value to include in a future ListFargateProfiles request. When the results of a ListFargateProfiles request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListIdentityProviderConfigsRequest {
    /**
     * The cluster name that you want to list identity provider configurations for.
     */
    clusterName: String;
    /**
     * The maximum number of identity provider configurations returned by ListIdentityProviderConfigs in paginated output. When you use this parameter, ListIdentityProviderConfigs returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListIdentityProviderConfigs request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListIdentityProviderConfigs returns up to 100 results and a nextToken value, if applicable.
     */
    maxResults?: ListIdentityProviderConfigsRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated IdentityProviderConfigsRequest where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.
     */
    nextToken?: String;
  }
  export type ListIdentityProviderConfigsRequestMaxResults = number;
  export interface ListIdentityProviderConfigsResponse {
    /**
     * The identity provider configurations for the cluster.
     */
    identityProviderConfigs?: IdentityProviderConfigs;
    /**
     * The nextToken value returned from a previous paginated ListIdentityProviderConfigsResponse where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.
     */
    nextToken?: String;
  }
  export interface ListNodegroupsRequest {
    /**
     * The name of the Amazon EKS cluster that you would like to list node groups in.
     */
    clusterName: String;
    /**
     * The maximum number of node group results returned by ListNodegroups in paginated output. When you use this parameter, ListNodegroups returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListNodegroups request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListNodegroups returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: ListNodegroupsRequestMaxResults;
    /**
     * The nextToken value returned from a previous paginated ListNodegroups request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.
     */
    nextToken?: String;
  }
  export type ListNodegroupsRequestMaxResults = number;
  export interface ListNodegroupsResponse {
    /**
     * A list of all of the node groups associated with the specified cluster.
     */
    nodegroups?: StringList;
    /**
     * The nextToken value to include in a future ListNodegroups request. When the results of a ListNodegroups request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.
     */
    resourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags for the resource.
     */
    tags?: TagMap;
  }
  export interface ListUpdatesRequest {
    /**
     * The name of the Amazon EKS cluster to list updates for.
     */
    name: String;
    /**
     * The name of the Amazon EKS managed node group to list updates for.
     */
    nodegroupName?: String;
    /**
     * The names of the installed add-ons that have available updates.
     */
    addonName?: String;
    /**
     * The nextToken value returned from a previous paginated ListUpdates request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.
     */
    nextToken?: String;
    /**
     * The maximum number of update results returned by ListUpdates in paginated output. When you use this parameter, ListUpdates returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListUpdates request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListUpdates returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: ListUpdatesRequestMaxResults;
  }
  export type ListUpdatesRequestMaxResults = number;
  export interface ListUpdatesResponse {
    /**
     * A list of all the updates for the specified cluster and Region.
     */
    updateIds?: StringList;
    /**
     * The nextToken value to include in a future ListUpdates request. When the results of a ListUpdates request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface LogSetup {
    /**
     * The available cluster control plane log types.
     */
    types?: LogTypes;
    /**
     * If a log type is enabled, that log type exports its control plane logs to CloudWatch Logs. If a log type isn't enabled, that log type doesn't export its control plane logs. Each individual log type can be enabled or disabled independently.
     */
    enabled?: BoxedBoolean;
  }
  export type LogSetups = LogSetup[];
  export type LogType = "api"|"audit"|"authenticator"|"controllerManager"|"scheduler"|string;
  export type LogTypes = LogType[];
  export interface Logging {
    /**
     * The cluster control plane logging configuration for your cluster.
     */
    clusterLogging?: LogSetups;
  }
  export interface Nodegroup {
    /**
     * The name associated with an Amazon EKS managed node group.
     */
    nodegroupName?: String;
    /**
     * The Amazon Resource Name (ARN) associated with the managed node group.
     */
    nodegroupArn?: String;
    /**
     * The name of the cluster that the managed node group resides in.
     */
    clusterName?: String;
    /**
     * The Kubernetes version of the managed node group.
     */
    version?: String;
    /**
     * If the node group was deployed using a launch template with a custom AMI, then this is the AMI ID that was specified in the launch template. For node groups that weren't deployed using a launch template, this is the version of the Amazon EKS optimized AMI that the node group was deployed with.
     */
    releaseVersion?: String;
    /**
     * The Unix epoch timestamp in seconds for when the managed node group was created.
     */
    createdAt?: Timestamp;
    /**
     * The Unix epoch timestamp in seconds for when the managed node group was last modified.
     */
    modifiedAt?: Timestamp;
    /**
     * The current status of the managed node group.
     */
    status?: NodegroupStatus;
    /**
     * The capacity type of your managed node group.
     */
    capacityType?: CapacityTypes;
    /**
     * The scaling configuration details for the Auto Scaling group that is associated with your node group.
     */
    scalingConfig?: NodegroupScalingConfig;
    /**
     * If the node group wasn't deployed with a launch template, then this is the instance type that is associated with the node group. If the node group was deployed with a launch template, then this is null.
     */
    instanceTypes?: StringList;
    /**
     * The subnets that were specified for the Auto Scaling group that is associated with your node group.
     */
    subnets?: StringList;
    /**
     * If the node group wasn't deployed with a launch template, then this is the remote access configuration that is associated with the node group. If the node group was deployed with a launch template, then this is null.
     */
    remoteAccess?: RemoteAccessConfig;
    /**
     * If the node group was deployed using a launch template with a custom AMI, then this is CUSTOM. For node groups that weren't deployed using a launch template, this is the AMI type that was specified in the node group configuration.
     */
    amiType?: AMITypes;
    /**
     * The IAM role associated with your node group. The Amazon EKS node kubelet daemon makes calls to AWS APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies.
     */
    nodeRole?: String;
    /**
     * The Kubernetes labels applied to the nodes in the node group.  Only labels that are applied with the Amazon EKS API are shown here. There may be other Kubernetes labels applied to the nodes in this group. 
     */
    labels?: labelsMap;
    /**
     * The Kubernetes taints to be applied to the nodes in the node group when they are created. Effect is one of NoSchedule, PreferNoSchedule, or NoExecute. Kubernetes taints can be used together with tolerations to control how workloads are scheduled to your nodes.
     */
    taints?: taintsList;
    /**
     * The resources associated with the node group, such as Auto Scaling groups and security groups for remote access.
     */
    resources?: NodegroupResources;
    /**
     * If the node group wasn't deployed with a launch template, then this is the disk size in the node group configuration. If the node group was deployed with a launch template, then this is null.
     */
    diskSize?: BoxedInteger;
    /**
     * The health status of the node group. If there are issues with your node group's health, they are listed here.
     */
    health?: NodegroupHealth;
    updateConfig?: NodegroupUpdateConfig;
    /**
     * If a launch template was used to create the node group, then this is the launch template that was used.
     */
    launchTemplate?: LaunchTemplateSpecification;
    /**
     * The metadata applied to the node group to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets. 
     */
    tags?: TagMap;
  }
  export interface NodegroupHealth {
    /**
     * Any issues that are associated with the node group. 
     */
    issues?: IssueList;
  }
  export type NodegroupIssueCode = "AutoScalingGroupNotFound"|"AutoScalingGroupInvalidConfiguration"|"Ec2SecurityGroupNotFound"|"Ec2SecurityGroupDeletionFailure"|"Ec2LaunchTemplateNotFound"|"Ec2LaunchTemplateVersionMismatch"|"Ec2SubnetNotFound"|"Ec2SubnetInvalidConfiguration"|"IamInstanceProfileNotFound"|"IamLimitExceeded"|"IamNodeRoleNotFound"|"NodeCreationFailure"|"AsgInstanceLaunchFailures"|"InstanceLimitExceeded"|"InsufficientFreeAddresses"|"AccessDenied"|"InternalFailure"|"ClusterUnreachable"|string;
  export interface NodegroupResources {
    /**
     * The Auto Scaling groups associated with the node group.
     */
    autoScalingGroups?: AutoScalingGroupList;
    /**
     * The remote access security group associated with the node group. This security group controls SSH access to the nodes.
     */
    remoteAccessSecurityGroup?: String;
  }
  export interface NodegroupScalingConfig {
    /**
     * The minimum number of nodes that the managed node group can scale in to. This number must be greater than zero.
     */
    minSize?: ZeroCapacity;
    /**
     * The maximum number of nodes that the managed node group can scale out to. For information about the maximum number that you can specify, see Amazon EKS service quotas in the Amazon EKS User Guide.
     */
    maxSize?: Capacity;
    /**
     * The current number of nodes that the managed node group should maintain.
     */
    desiredSize?: ZeroCapacity;
  }
  export type NodegroupStatus = "CREATING"|"ACTIVE"|"UPDATING"|"DELETING"|"CREATE_FAILED"|"DELETE_FAILED"|"DEGRADED"|string;
  export interface NodegroupUpdateConfig {
    maxUnavailable?: NonZeroInteger;
    maxUnavailablePercentage?: PercentCapacity;
  }
  export type NonZeroInteger = number;
  export interface OIDC {
    /**
     * The issuer URL for the OIDC identity provider.
     */
    issuer?: String;
  }
  export interface OidcIdentityProviderConfig {
    /**
     * The name of the configuration.
     */
    identityProviderConfigName?: String;
    /**
     * The ARN of the configuration.
     */
    identityProviderConfigArn?: String;
    /**
     * The cluster that the configuration is associated to.
     */
    clusterName?: String;
    /**
     * The URL of the OIDC identity provider that allows the API server to discover public signing keys for verifying tokens.
     */
    issuerUrl?: String;
    /**
     * This is also known as audience. The ID of the client application that makes authentication requests to the OIDC identity provider.
     */
    clientId?: String;
    /**
     * The JSON Web token (JWT) claim that is used as the username.
     */
    usernameClaim?: String;
    /**
     * The prefix that is prepended to username claims to prevent clashes with existing names. The prefix can't contain system: 
     */
    usernamePrefix?: String;
    /**
     * The JSON web token (JWT) claim that the provider uses to return your groups.
     */
    groupsClaim?: String;
    /**
     * The prefix that is prepended to group claims to prevent clashes with existing names (such as system: groups). For example, the value oidc: creates group names like oidc:engineering and oidc:infra. The prefix can't contain system: 
     */
    groupsPrefix?: String;
    /**
     * The key-value pairs that describe required claims in the identity token. If set, each claim is verified to be present in the token with a matching value.
     */
    requiredClaims?: requiredClaimsMap;
    /**
     * The metadata to apply to the provider configuration to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you defined.
     */
    tags?: TagMap;
    /**
     * The status of the OIDC identity provider.
     */
    status?: configStatus;
  }
  export interface OidcIdentityProviderConfigRequest {
    /**
     * The name of the OIDC provider configuration.
     */
    identityProviderConfigName: String;
    /**
     * The URL of the OpenID identity provider that allows the API server to discover public signing keys for verifying tokens. The URL must begin with https:// and should correspond to the iss claim in the provider's OIDC ID tokens. Per the OIDC standard, path components are allowed but query parameters are not. Typically the URL consists of only a hostname, like https://server.example.org or https://example.com. This URL should point to the level below .well-known/openid-configuration and must be publicly accessible over the internet.
     */
    issuerUrl: String;
    /**
     * This is also known as audience. The ID for the client application that makes authentication requests to the OpenID identity provider.
     */
    clientId: String;
    /**
     * The JSON Web Token (JWT) claim to use as the username. The default is sub, which is expected to be a unique identifier of the end user. You can choose other claims, such as email or name, depending on the OpenID identity provider. Claims other than email are prefixed with the issuer URL to prevent naming clashes with other plug-ins.
     */
    usernameClaim?: String;
    /**
     * The prefix that is prepended to username claims to prevent clashes with existing names. If you do not provide this field, and username is a value other than email, the prefix defaults to issuerurl#. You can use the value - to disable all prefixing.
     */
    usernamePrefix?: String;
    /**
     * The JWT claim that the provider uses to return your groups.
     */
    groupsClaim?: String;
    /**
     * The prefix that is prepended to group claims to prevent clashes with existing names (such as system: groups). For example, the value oidc: will create group names like oidc:engineering and oidc:infra.
     */
    groupsPrefix?: String;
    /**
     * The key value pairs that describe required claims in the identity token. If set, each claim is verified to be present in the token with a matching value. For the maximum number of claims that you can require, see Amazon EKS service quotas in the Amazon EKS User Guide.
     */
    requiredClaims?: requiredClaimsMap;
  }
  export type PercentCapacity = number;
  export interface Provider {
    /**
     * Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be symmetric, created in the same region as the cluster, and if the KMS key was created in a different account, the user must have access to the KMS key. For more information, see Allowing Users in Other Accounts to Use a KMS key in the AWS Key Management Service Developer Guide.
     */
    keyArn?: String;
  }
  export interface RemoteAccessConfig {
    /**
     * The Amazon EC2 SSH key that provides access for SSH communication with the nodes in the managed node group. For more information, see Amazon EC2 Key Pairs in the Amazon Elastic Compute Cloud User Guide for Linux Instances.
     */
    ec2SshKey?: String;
    /**
     * The security groups that are allowed SSH access (port 22) to the nodes. If you specify an Amazon EC2 SSH key but do not specify a source security group when you create a managed node group, then port 22 on the nodes is opened to the internet (0.0.0.0/0). For more information, see Security Groups for Your VPC in the Amazon Virtual Private Cloud User Guide.
     */
    sourceSecurityGroups?: StringList;
  }
  export type ResolveConflicts = "OVERWRITE"|"NONE"|string;
  export type RoleArn = string;
  export type String = string;
  export type StringList = String[];
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to which to add tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.
     */
    resourceArn: String;
    /**
     * The tags to add to the resource. A tag is an array of key-value pairs.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface Taint {
    /**
     * The key of the taint.
     */
    key?: taintKey;
    /**
     * The value of the taint.
     */
    value?: taintValue;
    /**
     * The effect of the taint.
     */
    effect?: TaintEffect;
  }
  export type TaintEffect = "NO_SCHEDULE"|"NO_EXECUTE"|"PREFER_NO_SCHEDULE"|string;
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource from which to delete tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.
     */
    resourceArn: String;
    /**
     * The keys of the tags to be removed.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface Update {
    /**
     * A UUID that is used to track the update.
     */
    id?: String;
    /**
     * The current status of the update.
     */
    status?: UpdateStatus;
    /**
     * The type of the update.
     */
    type?: UpdateType;
    /**
     * A key-value map that contains the parameters associated with the update.
     */
    params?: UpdateParams;
    /**
     * The Unix epoch timestamp in seconds for when the update was created.
     */
    createdAt?: Timestamp;
    /**
     * Any errors associated with a Failed update.
     */
    errors?: ErrorDetails;
  }
  export interface UpdateAddonRequest {
    /**
     * The name of the cluster.
     */
    clusterName: ClusterName;
    /**
     * The name of the add-on. The name must match one of the names returned by  ListAddons .
     */
    addonName: String;
    /**
     * The version of the add-on. The version must match one of the versions returned by  DescribeAddonVersions .
     */
    addonVersion?: String;
    /**
     * The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see Amazon EKS node IAM role in the Amazon EKS User Guide.  To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see Enabling IAM roles for service accounts on your cluster in the Amazon EKS User Guide. 
     */
    serviceAccountRoleArn?: RoleArn;
    /**
     * How to resolve parameter value conflicts when applying the new version of the add-on to the cluster.
     */
    resolveConflicts?: ResolveConflicts;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface UpdateAddonResponse {
    update?: Update;
  }
  export interface UpdateClusterConfigRequest {
    /**
     * The name of the Amazon EKS cluster to update.
     */
    name: String;
    resourcesVpcConfig?: VpcConfigRequest;
    /**
     * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster Control Plane Logs in the  Amazon EKS User Guide .  CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see Amazon CloudWatch Pricing. 
     */
    logging?: Logging;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface UpdateClusterConfigResponse {
    update?: Update;
  }
  export interface UpdateClusterVersionRequest {
    /**
     * The name of the Amazon EKS cluster to update.
     */
    name: String;
    /**
     * The desired Kubernetes version following a successful update.
     */
    version: String;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface UpdateClusterVersionResponse {
    /**
     * The full description of the specified update
     */
    update?: Update;
  }
  export interface UpdateLabelsPayload {
    /**
     * Kubernetes labels to be added or updated.
     */
    addOrUpdateLabels?: labelsMap;
    /**
     * Kubernetes labels to be removed.
     */
    removeLabels?: labelsKeyList;
  }
  export interface UpdateNodegroupConfigRequest {
    /**
     * The name of the Amazon EKS cluster that the managed node group resides in.
     */
    clusterName: String;
    /**
     * The name of the managed node group to update.
     */
    nodegroupName: String;
    /**
     * The Kubernetes labels to be applied to the nodes in the node group after the update.
     */
    labels?: UpdateLabelsPayload;
    /**
     * The Kubernetes taints to be applied to the nodes in the node group after the update.
     */
    taints?: UpdateTaintsPayload;
    /**
     * The scaling configuration details for the Auto Scaling group after the update.
     */
    scalingConfig?: NodegroupScalingConfig;
    updateConfig?: NodegroupUpdateConfig;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface UpdateNodegroupConfigResponse {
    update?: Update;
  }
  export interface UpdateNodegroupVersionRequest {
    /**
     * The name of the Amazon EKS cluster that is associated with the managed node group to update.
     */
    clusterName: String;
    /**
     * The name of the managed node group to update.
     */
    nodegroupName: String;
    /**
     * The Kubernetes version to update to. If no version is specified, then the Kubernetes version of the node group does not change. You can specify the Kubernetes version of the cluster to update the node group to the latest AMI version of the cluster's Kubernetes version. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify version, or the node group update will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide.
     */
    version?: String;
    /**
     * The AMI version of the Amazon EKS optimized AMI to use for the update. By default, the latest available AMI version for the node group's Kubernetes version is used. For more information, see Amazon EKS optimized Amazon Linux 2 AMI versions  in the Amazon EKS User Guide. If you specify launchTemplate, and your launch template uses a custom AMI, then don't specify releaseVersion, or the node group update will fail. For more information about using launch templates with Amazon EKS, see Launch template support in the Amazon EKS User Guide.
     */
    releaseVersion?: String;
    /**
     * An object representing a node group's launch template specification. You can only update a node group using a launch template if the node group was originally deployed with a launch template.
     */
    launchTemplate?: LaunchTemplateSpecification;
    /**
     * Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue. If an update fails because pods could not be drained, you can force the update after it fails to terminate the old node whether or not any pods are running on the node.
     */
    force?: Boolean;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: String;
  }
  export interface UpdateNodegroupVersionResponse {
    update?: Update;
  }
  export interface UpdateParam {
    /**
     * The keys associated with an update request.
     */
    type?: UpdateParamType;
    /**
     * The value of the keys submitted as part of an update request.
     */
    value?: String;
  }
  export type UpdateParamType = "Version"|"PlatformVersion"|"EndpointPrivateAccess"|"EndpointPublicAccess"|"ClusterLogging"|"DesiredSize"|"LabelsToAdd"|"LabelsToRemove"|"TaintsToAdd"|"TaintsToRemove"|"MaxSize"|"MinSize"|"ReleaseVersion"|"PublicAccessCidrs"|"LaunchTemplateName"|"LaunchTemplateVersion"|"IdentityProviderConfig"|"EncryptionConfig"|"AddonVersion"|"ServiceAccountRoleArn"|"ResolveConflicts"|"MaxUnavailable"|"MaxUnavailablePercentage"|string;
  export type UpdateParams = UpdateParam[];
  export type UpdateStatus = "InProgress"|"Failed"|"Cancelled"|"Successful"|string;
  export interface UpdateTaintsPayload {
    /**
     * Kubernetes taints to be added or updated.
     */
    addOrUpdateTaints?: taintsList;
    /**
     * Kubernetes taints to be removed.
     */
    removeTaints?: taintsList;
  }
  export type UpdateType = "VersionUpdate"|"EndpointAccessUpdate"|"LoggingUpdate"|"ConfigUpdate"|"AssociateIdentityProviderConfig"|"DisassociateIdentityProviderConfig"|"AssociateEncryptionConfig"|"AddonUpdate"|string;
  export interface VpcConfigRequest {
    /**
     * Specify subnets for your Amazon EKS nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.
     */
    subnetIds?: StringList;
    /**
     * Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your nodes and the Kubernetes control plane. If you don't specify any security groups, then familiarize yourself with the difference between Amazon EKS defaults for clusters deployed with Kubernetes:   1.14 Amazon EKS platform version eks.2 and earlier   1.14 Amazon EKS platform version eks.3 and later    For more information, see Amazon EKS security group considerations in the  Amazon EKS User Guide .
     */
    securityGroupIds?: StringList;
    /**
     * Set this value to false to disable public access to your cluster's Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is true, which enables public access for your Kubernetes API server. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .
     */
    endpointPublicAccess?: BoxedBoolean;
    /**
     * Set this value to true to enable private access for your cluster's Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is false, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or AWS Fargate pods in the cluster, then ensure that publicAccessCidrs includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .
     */
    endpointPrivateAccess?: BoxedBoolean;
    /**
     * The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is 0.0.0.0/0. If you've disabled private endpoint access and you have nodes or AWS Fargate pods in the cluster, then ensure that you specify the necessary CIDR blocks. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .
     */
    publicAccessCidrs?: StringList;
  }
  export interface VpcConfigResponse {
    /**
     * The subnets associated with your cluster.
     */
    subnetIds?: StringList;
    /**
     * The security groups associated with the cross-account elastic network interfaces that are used to allow communication between your nodes and the Kubernetes control plane.
     */
    securityGroupIds?: StringList;
    /**
     * The cluster security group that was created by Amazon EKS for the cluster. Managed node groups use this security group for control-plane-to-data-plane communication.
     */
    clusterSecurityGroupId?: String;
    /**
     * The VPC associated with your cluster.
     */
    vpcId?: String;
    /**
     * This parameter indicates whether the Amazon EKS public API server endpoint is enabled. If the Amazon EKS public API server endpoint is disabled, your cluster's Kubernetes API server can only receive requests that originate from within the cluster VPC.
     */
    endpointPublicAccess?: Boolean;
    /**
     * This parameter indicates whether the Amazon EKS private API server endpoint is enabled. If the Amazon EKS private API server endpoint is enabled, Kubernetes API requests that originate from within your cluster's VPC use the private VPC endpoint instead of traversing the internet. If this value is disabled and you have nodes or AWS Fargate pods in the cluster, then ensure that publicAccessCidrs includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .
     */
    endpointPrivateAccess?: Boolean;
    /**
     * The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the listed CIDR blocks is denied. The default value is 0.0.0.0/0. If you've disabled private endpoint access and you have nodes or AWS Fargate pods in the cluster, then ensure that the necessary CIDR blocks are listed. For more information, see Amazon EKS Cluster Endpoint Access Control in the  Amazon EKS User Guide .
     */
    publicAccessCidrs?: StringList;
  }
  export type ZeroCapacity = number;
  export type configStatus = "CREATING"|"DELETING"|"ACTIVE"|string;
  export type labelKey = string;
  export type labelValue = string;
  export type labelsKeyList = String[];
  export type labelsMap = {[key: string]: labelValue};
  export type requiredClaimsKey = string;
  export type requiredClaimsMap = {[key: string]: requiredClaimsValue};
  export type requiredClaimsValue = string;
  export type taintKey = string;
  export type taintValue = string;
  export type taintsList = Taint[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-11-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the EKS client.
   */
  export import Types = EKS;
}
export = EKS;
