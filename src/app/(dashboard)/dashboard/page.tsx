'use client';

export default function DashboardPage() {
    const mockTickets = [
        { id: 1, customer: 'Juan Pérez', model: 'iPhone 13 Pro', status: 'RECIBIDO', date: '2024-12-01' },
        { id: 2, customer: 'María García', model: 'Samsung Galaxy S23', status: 'DIAGNOSTICO', date: '2024-12-02' },
        { id: 3, customer: 'Carlos López', model: 'MacBook Pro 14"', status: 'REPARACION', date: '2024-12-03' },
        { id: 4, customer: 'Ana Martínez', model: 'iPad Air', status: 'LISTO', date: '2024-12-03' },
        { id: 5, customer: 'Pedro Sánchez', model: 'Dell XPS 15', status: 'ENTREGADO', date: '2024-11-28' },
    ];

    const statusColors: Record<string, string> = {
        RECIBIDO: 'bg-blue-100 text-blue-800',
        DIAGNOSTICO: 'bg-yellow-100 text-yellow-800',
        REPARACION: 'bg-purple-100 text-purple-800',
        LISTO: 'bg-green-100 text-green-800',
        ENTREGADO: 'bg-gray-100 text-gray-800',
    };

    const statusLabels: Record<string, string> = {
        RECIBIDO: 'Recibido',
        DIAGNOSTICO: 'Diagnóstico',
        REPARACION: 'Reparación',
        LISTO: 'Listo',
        ENTREGADO: 'Entregado',
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600 mb-6">Vista general de tickets activos</p>

            {/* Desktop Table */}
            <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modelo</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {mockTickets.map((ticket) => (
                            <tr key={ticket.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ticket.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.customer}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.model}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[ticket.status]}`}>
                                        {statusLabels[ticket.status]}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
                {mockTickets.map((ticket) => (
                    <div key={ticket.id} className="bg-white rounded-lg shadow p-4">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">{ticket.model}</h3>
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusColors[ticket.status]}`}>
                                {statusLabels[ticket.status]}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Cliente: {ticket.customer}</p>
                        <p className="text-xs text-gray-500">Fecha: {ticket.date} • ID: #{ticket.id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
