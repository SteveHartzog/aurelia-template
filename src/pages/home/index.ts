export class Home {
  heading: string = 'Steve Hartzog, Web Architect';
  capabilities: Capability[] = [
    new Capability({
      title: 'Enterprise Level Infrastructure',
      link: '/#!',
      image: 'capabilities/network-architecture.jpg',
      description: 'Todays systems demand more bandwidth, faster connections, higher availability, and serve a geographically dispersed workforce. We provide advanced and basic networking products and services that enable our customers to capitalize on technology investments by building proven network infrastructures that can handle ever-increasing traffic loads and user demands.'
    }), new Capability({
      title: 'Enterprise Level Security',
      link: '/#!',
      image: 'capabilities/enterprise-security.jpg',
      description: 'Offering a wide range of both information and physical security products and services to customers - both small and large. These solutions protect data and critical internal assets while safeguarding users, customers, and partners from malicious attacks.'
    }), new Capability({
      title: 'Storage Management',
      link: '/#!',
      image: 'capabilities/storage-management.jpg',
      description: 'We provide enterprise data storage and management solutions that range from simple file sharing solutions to more complex Storage Attached Network (SAN) deployments. With product offerings in capacity expansion, file-sharing, network attached storage (NAS), direct-attached storage (DAS), disk storage, SAN and SAN management and tape backup solutions we can tailor any solution to your needs.'
    }), new Capability({
      title: 'Virtualization and Cloud Computing',
      link: '/#!',
      image: 'capabilities/cloud-computing.png',      
      description: 'Virtualization technologies increase manageability, security, and flexibility in IT environments. So if it’s a migration to Microsoft Office365, server virtualization, desktop virtualization, or storage virtualization you are seeking we have the expertise to enable customers to maximize system utilization by consolidating multiple environments into a single server, computer, or storage sub-system.'
    }), new Capability({
      title: 'Software Development',
      link: '/#!',      
      image: 'capabilities/software-engineering.png',
      description: 'For customers looking for a customized development solution for web and desktop, mobile applications, or E-Learning we have experts who can help make your vision a reality.'
    }), new Capability({
      title: 'IT Support and Administration',
      link: '/#!',
      image: 'capabilities/it-support.jpg',
      description: 'Using proven IT management techniques we can make your Service Desk and Systems Administration processes and procedures more efficient, which reduces resolution time for minor issues and creates a better user experience while keeping costs in line.'
    })
  ];
}

class Capability {
  image: string;
  title: string;
  description: string;
  link: string;
  constructor(data) {
    Object.assign(this, data);
  }
}